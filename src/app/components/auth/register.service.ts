import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerForm = {
    userIdentity: '',
      password:'',
      role:'',
      firstName: '',
      lastName: '',
      email: '',
      userId: 0
  }
  constructor() { }
    
 
}
