import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {

  email:string="";

  constructor(
    private router:Router, 
    private alertcontroller:AlertController,
    private location:Location,
  ){}

  ngOnInit() {
  }
  async recover(){
    const alert = await this.alertcontroller.create({
      header: '@Recuperar contraseña',
      message:'Se ha enviado un correo a '+this.email,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          
          handler: () => {
            this.router.navigate(['']);
          },
        },
      ],
    });
    await alert.present();
  }
  async goBack(){
    this.location.back();
  }
}
