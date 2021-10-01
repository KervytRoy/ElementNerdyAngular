import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { UserService } from '../../../api/services/user.service';
import { AuthService } from '../../../shared/services/auth.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class Register2Component implements OnInit {
 
  dataForm1 = {
    userIdentity: '',
    password:'',
    role:'',
    firstName:'',
    lastName:'',
    email:'',
    userId:0

  }


  dataForms = {}

  constructor(private registroService: UserService, private router: Router, private registerService: RegisterService,private formBuilder: FormBuilder) {
      this.buildFrom()
      this.dataForm1.userIdentity = this.registerService.registerForm.userIdentity,
      this.dataForm1.password = this.registerService.registerForm.password,
      this.dataForm1.role = this.registerService.registerForm.role

  }

  loginForm:FormGroup;


  private buildFrom(){
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required]] ,
      lastName:['', [Validators.required]],
      email:['', [Validators.required]]
  
    });
    
    this.loginForm.valueChanges
    .pipe(debounceTime(500))
    .subscribe( value =>{})
  }




  ngOnInit(): void {
  }
 
  apiPostPost


  registrar(form) {
    this.dataForm1.firstName = form.firstName
    this.dataForm1.lastName  = form.lastName
    this.dataForm1.email  = form.email
    if(this.loginForm.valid) {
      this.loginForm.reset()
      this.loginForm.disable()
      this.loginForm.untouched
      this.registroService.apiUserPost({'body': this.dataForm1 }).subscribe(
        res => {    
         window.alert('El Usuario ha sido creado')
         this.router.navigate(['/home'])
        },
        err => {
          this.loginForm.enable()
        }
      )
    }
    else {
      this.loginForm.markAllAsTouched();
    }
    
  }


}
