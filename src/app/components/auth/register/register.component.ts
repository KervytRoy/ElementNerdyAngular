import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../shared/components/header/models/user.interface';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor( private _authSrv: AuthService, private router: Router, private registerService: RegisterService,private formBuilder: FormBuilder) { 
    this.buildFrom()
  }

  loginForm:FormGroup;


  private buildFrom(){
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(4)]] ,
      password:['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
      role:['', [Validators.required]]
  
    });
    
    this.loginForm.valueChanges
    .pipe(debounceTime(500))
    .subscribe( value =>{})
  }




  ngOnInit(): void {

  }


  onLogin(form) {
    this.registerService.registerForm.userIdentity = form.name
    this.registerService.registerForm.password = form.password
    this.registerService.registerForm.role = form.role
    if(this.loginForm.valid) {
      this.loginForm.reset()
      this.loginForm.disable()
      this.loginForm.untouched
      this.router.navigate(['/register2'])
    }
    else {
      this.loginForm.markAllAsTouched();
    }
    
  }

}
