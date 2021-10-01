import { Injectable } from '@angular/core';
import { TokenService } from '../../api/services/token.service';
import { UserI } from '../components/header/models/user.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _tokenS: TokenService, private router: Router) {
  }


  loginByEmail(userL): Observable<any | void> {
    return this._tokenS.authentication$Json({ 'body': userL })
  }

  loggedIn() {
    return !!localStorage.getItem('Token');
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role');
    localStorage.removeItem('UserId');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('Token');
  }
  
  getRole() {    
    if (localStorage.getItem('Role') == '"Consumer"'){
      return true
    }
    else {
      return false
    }
 
  }
  
  getUserId() {
    return localStorage.getItem('UserId');
  }

}



