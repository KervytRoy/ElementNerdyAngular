import { Component, OnInit, Inject } from '@angular/core';
import { PostService } from '../../../api/services/post.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../../../api/services/image.service';
import { NewPostInterface, ImageResponse } from '../../../shared/interfaces/new-post-interface';
import { AuthService } from '../../../shared/services/auth.service';
import { debounceTime } from 'rxjs/operators';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
   
  photoSelected: string | ArrayBuffer;
  file: File;

  clickHereImg = 'Haz click aquí..'
  
  
  response

  constructor( private router: Router, private _imageService: ImageService, private _postService: PostService, private _authService: AuthService, private formBuilder: FormBuilder ) {
    this.buildFrom()
   }
  postData: NewPostInterface = {
    
    userId: parseInt(this._authService.getUserId()),
    title: '',
    description: '',
    image: ''
  };
  modalForm:FormGroup;
  ngOnInit(): void {
  }
  
 
  private buildFrom(){
    this.modalForm  = this.formBuilder.group({
      title: ['', [Validators.required]] ,
      description:['', [Validators.required, Validators.maxLength(1000), Validators.minLength(10)]],
      image: ['', [Validators.required]] 
    });
    
    this.modalForm .valueChanges
    .pipe(debounceTime(1000))
    .subscribe( )
  }
  


  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      this.clickHereImg = ''
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }


  uploadPost(form) {
    if(this.modalForm.valid) {
      this.modalForm.reset()
      this.modalForm.disable()
      this.modalForm.untouched
      alert('Se estan procesando los datos, por favor espere unos segundos')
      this._imageService.insertImage({'body':{'Image':this.file} }).subscribe(
        res => { 
          this.postData.image = res.data
           this.sendPost(form)      
        },
        err => {
          alert('Tiempo de espera agotado para esta solicitud')
          this.modalForm.enable()
          this.modalForm.reset()
          this.file = null 
        }
      )
    }
    else {
      this.modalForm.markAllAsTouched();
    }
    
  }

 sendPost(form) {
  this.postData.title = form.title
  this.postData.description = form.description
    this._postService.apiPostPost({'body': this.postData}).subscribe(
      res => {
      alert('Se ha publicado correctamente')
        this.router.navigate(['/posts']);
      },
      err => {console.log('errPOST', err.message)}
    )
  } 

}
