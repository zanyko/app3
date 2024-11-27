import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NewUser } from 'src/interfaces/users'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  userdata: any;
  newUser:NewUser={
    username:"",
    email:"",
    password:"",
    name1:"",
    name2:"",
    name3:"",
    name4:"",
    phone:"",
    isactive: false,
    tipo:0
  };
  
  registroForm:FormGroup;

  constructor(
    private authservice:AuthService, 
    private router:Router, 
    private toast: ToastController,
    private alertcontroller: AlertController, 
    private fBuilder: FormBuilder
  ){
    this.registroForm = this.fBuilder.group({
      'username' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'email' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'password' : new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      'name1' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'name2' : new FormControl("", [Validators.minLength(3)]),
      'name3' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'name4' : new FormControl("", [Validators.minLength(3)]),
      'phone' : new FormControl("", [Validators.required, Validators.minLength(8)]),
    })
  }

  ngOnInit() {
  }
  async signup(){
    if (this.registroForm.valid){
      this.authservice.GetUserByUsername(this.registroForm.value.username).subscribe(resp=>{this.userdata = resp; 
        if(this.userdata.length>0){
          this.registroForm.reset();
          this.duplicated();
        }
        else{
          this.newUser.username = this.registroForm.value.username;
          this.newUser.email = this.registroForm.value.email;
          this.newUser.password = this.registroForm.value.password;
          this.newUser.name1 = this.registroForm.value.name1;
          this.newUser.name2 = this.registroForm.value.name2;
          this.newUser.name3 = this.registroForm.value.name3;
          this.newUser.name4 = this.registroForm.value.name4;
          this.newUser.phone = this.registroForm.value.phone;
          this.newUser.isactive=true;
          this.newUser.tipo=2;
          this.authservice.PostUsuario(this.newUser).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/login');
        }
      })
    }
  }
  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Created',
      message: "You've been registered " + this.newUser.username,
      buttons: ['OK']
    });
    alerta.present();
  }

  async duplicated(){
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: 'The user '+ this.newUser.username + ' is already registered',
      buttons: ['OK']
    });
    alerta.present();
  }
  async goBack(){
    this.router.navigate(['/start']);
  }
}
