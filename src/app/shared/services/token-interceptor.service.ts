import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SpinnerServiceService } from './spinner-service.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private _authService: AuthService, private spinner: SpinnerServiceService, private router: Router) { }

  intercept(req, next) {
    this.spinner.getSpinner()

      var tokenAuth : Object = JSON.parse(this._authService.getToken())
      const tokenizeReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${ tokenAuth }`
        }
      })
      return next.handle(tokenizeReq).pipe(
        
        finalize(()=> this.spinner.detenerSpinner()),
        catchError(this.manejarError)
      )
    
    
  }

  manejarError(error: HttpErrorResponse){

    if (error.status >= 400 && error.status < 500){
      alert('Error en la solicitud, intentelo nuevamente')
    }
    else if ( error.status >= 500){
      alert('Error en el servidor, intentelo mas tarde')
    }
  return throwError(error.message)
  }
}
