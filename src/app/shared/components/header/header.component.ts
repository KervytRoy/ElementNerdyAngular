import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewPostComponent } from '../../../components/posts/new-post/new-post.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void { 
  }

   logout(){
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/login'])
    
   }
   openDialog():void{
     const dialogRef = this.dialog.open(NewPostComponent, {});
     dialogRef.afterClosed().subscribe(res => {
     });
   }

   loggedCond(){
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/login'])
    }
    else{
      this.router.navigate(['/posts'])
    }
   }
     
   verifyRoleNew()
   {     
  
     if(this.authService.getRole() )
     {
       window.alert("Esta función solo está disponible para Administradores");
     } 
     else {
      this.router.navigate(['/new'])
    }
   }

   verifyRoleRegister()
    {     

      if(this.authService.getRole() )
      {
        window.alert("Esta función solo está disponible para Administradores");
      } 
      else {
        this.router.navigate(['/register'])
      }
    }
}
