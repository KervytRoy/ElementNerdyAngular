import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../shared/components/header/models/user.interface';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './out-of-service.component.html',
  styleUrls: ['./out-of-service.component.scss']
})
export class OutOfServiceComponent implements OnInit {

  constructor(private _authSrv: AuthService, private router: Router,private formBuilder: FormBuilder) {
  
  }


  ngOnInit(): void {

  }

  

}

 
