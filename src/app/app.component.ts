import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';


interface Menu{
  icon:string;
  name:string;
  redirecTo:string;
}

register();
interface Clase{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu:Menu[]=[
    {
      icon:'desktop-outline',
      name: 'Inicio',
      redirecTo: '/tabs/home'
    },
    {
      icon:'person-circle-outline',
      name: 'Gestionar clases',
      redirecTo: '/tabs/gestion'
    },
    {
      icon:'folder-open-outline',
      name: 'Justificaciones',
      redirecTo: '/tabs/justify'
    },
    {
      icon:'person-circle-outline',
      name: 'Mi perfil',
      redirecTo: '/tabs/profile'
    },
    {
      icon:'log-out-outline',
      name: 'Cerrar Sesión',
      redirecTo: ''
    },

  ]
  clase:Clase[]=[
    {
      icon:'desktop-outline',
      name: 'Calidad de Software 007D',
      redirecTo: '/tabs/gestion'
    },
    {
      icon:'trending-up-outline',
      name: 'Estadística 007D',
      redirecTo: '/tabs/gestion'
    },
    {
      icon:'git-branch-outline',
      name: 'Programación Móvil 007D',
      redirecTo: '/tabs/gestion'
    },

  ]

  constructor(private router:Router) {}
  
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/start']);
  } 
}
