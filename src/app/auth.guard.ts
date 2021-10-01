import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router){
    
  }

  canActivate(): boolean{
    if (this.authService.loggedIn()){
      return true;
    }
       this.route.navigate(['/login']);
       return false;
  }
  
}
