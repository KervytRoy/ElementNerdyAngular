import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authSrv: AuthService, private router: Router,private formBuilder: FormBuilder) { 
    this.buildFrom()
  }

  loginForm:FormGroup;
   
 dataform = {
  user : "",
  password: ""
 }


private buildFrom(){
  this.loginForm = this.formBuilder.group({
    user: ['', [Validators.required]] ,
    password:['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]]

  });
  
  this.loginForm.valueChanges
  .pipe(debounceTime(500))
  .subscribe( )
}

  ngOnInit(): void {
    this._authSrv.logout()
  }

errormessage = ""

  onLogin(form)  {
    this.dataform.user = form.user 
    this.dataform.password = form.password
    if(this.loginForm.valid) {
      this.loginForm.reset()
      this.loginForm.disable()
      this.loginForm.untouched
       alert('Has enviado los datos correctamente, por favor espera unos segundos y haz click en aceptar')
      this._authSrv.loginByEmail(this.dataform)
      .subscribe(
        res => {

          localStorage.setItem('Token', JSON.stringify(res.data.token));
          localStorage.setItem('Role', JSON.stringify(res.data.role));
          localStorage.setItem('UserId', JSON.stringify(res.data.userId));
          this.router.navigate(['/posts'])
        },
        err => {
          console.log('datos invalidos 1')
          this.loginForm.enable()
        }
      ) 
      
    } 
    else {
      this.loginForm.markAllAsTouched();
    }
    
  }

}
