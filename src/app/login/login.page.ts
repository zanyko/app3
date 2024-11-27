import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata:any;
  usuario={
    id:0,
    username:"",
    email:"",
    password:"",
    name1:"",
    name2:"",
    name3:"",
    name4:"",
    phone:"",
    isactive:false,
    tipo:0
  }
  loginForm:FormGroup;

  constructor(
    private authservice:AuthService, 
    private router:Router, 
    private toast: ToastController,
    private alertcontroller: AlertController, 
    private builder: FormBuilder
  )
    {
      this.loginForm = this.builder.group({
        'username' : new FormControl("", [Validators.required, Validators.minLength(3)]),
        'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
      })
    }

  ngOnInit() {
  }

  login(){
    if (!this.loginForm.valid){
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authservice.GetUserByUsername(username).subscribe(resp =>{
      this.userdata = resp;
      console.log(this.userdata);
      if (this.userdata.length === 0) {
        this.loginForm.reset();
        this.UsuarioNoExiste();
        return;
      }

      this.usuario={
        id: this.userdata[0].id,
        username: this.userdata[0].username,
        email:this.userdata[0].email,
        password: this.userdata[0].password,
        name1:this.userdata[0].name1,
        name2:this.userdata[0].name2,
        name3:this.userdata[0].name3,
        name4:this.userdata[0].name4,
        phone:this.userdata[0].phone,
        isactive: this.userdata[0].isactive,
        tipo: this.userdata[0].tipo
      }
      if (this.usuario.password !== password) {
        this.ErrorUsuario(); 
        return;
      }
      if (!this.usuario.isactive) {
        this.loginForm.reset();
        this.UsuarioInactivo();
        return;
      }
      if (this.userdata[0].tipo != 1) {
        this.loginForm.reset();
        this.tipoUser();
        return;
      }
      this.IniciarSesion(this.usuario);
    })
  }


  private IniciarSesion(usuario:any){
    sessionStorage.setItem('username', usuario.username);
    sessionStorage.setItem('password', usuario.password);
    sessionStorage.setItem('ingresado', 'true');
    this.showToast('Sesión Iniciada '+ this.usuario.username);
    this.router.navigate(['/tabs/home']);

  }
  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }
  
  async UsuarioInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Usuario inactivo',
      message : 'Contactar a admin@admin.cl',
      buttons : ['OK']
    })
    alerta.present();
  }

  async ErrorUsuario(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Error',
      message : 'Contraseña o usuario incorrectos',
      buttons : ['OK']
    })
    alerta.present();
  }

  async UsuarioNoExiste(){
    const alerta = await this.alertcontroller.create({ 
      header : 'No existe...',
      message : 'Los datos no coinciden',
      buttons : ['OK']
    })
    alerta.present();
  }
  async tipoUser(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Error',
      message : 'El usuario ingresado debe ser docente',
      buttons : ['OK']
    })
    alerta.present();
  }

  signup(){
    this.router.navigate(['/signup']);
  }
  recover(){
    this.router.navigate(['/recover']);
  }
  goBack(){
    this.router.navigate(['/start']);
  }
}
