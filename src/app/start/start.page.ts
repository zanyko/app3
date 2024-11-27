import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(
    private router:Router
  ){}

  ngOnInit() {
  }
  async goToLogin(){
    this.router.navigate(['/login']);
  }
  async goToSignup(){
    this.router.navigate(['/signup']);
  }
}
