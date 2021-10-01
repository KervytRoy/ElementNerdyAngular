import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  listPublic = [
    {
      title: 'Las vacunas que ya estan listas para el covid-19 - Amavida',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBDFkSpnpz9sP7wkUwl55NY2vkUjsXIvn1Q&usqp=CAU'
    },
    {
      title: 'La NASA envía un vehículo de seis ruedas para explorar Marte',
      img: 'https://img.autocosmos.com/noticias/fotos/preview/NAZ_cb80f3124d8c4e7bb6639e8487b1bb6b.jpg'
    },
    {
      title: 'Rusia planea una base habitable en una luna de Júpiter que tiene',
      img: 'https://telefe-static2.akamaized.net/media/280769/calisto.jpg?v=20200917145350000&format=main&width=640&height=360&mode=crop'
    },
    {
      title: '¿Qué ocurriría si el Sol muriera en 10 días? ¿Qué pasa si la Tierra lo viera? ...',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jebVv0gVKUUO_VQ6EH4m-LwBYbSiKsSQ0L8AhCSLyCVwc2IEH2fevvUI0nF7r23aE4A&usqp=CAU'
    },
    {
      title: 'Un par de genios crearon un detallado vídeo que muestra c...',
      img: 'https://i.blogs.es/5382dc/death-star/1366_2000.jpg'
    },
   
  ]

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  loggedCond(){
    if (!this._authService.loggedIn()) {
      window.alert("Debes iniciar sesión para ir a las publicaciones");
    }
    else{
      this.router.navigate(['/posts'])
    }
   }

}
