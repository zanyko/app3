import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Users } from 'src/interfaces/users'


@Component({
  selector: 'app-profile-mod',
  templateUrl: './profile-mod.page.html',
  styleUrls: ['./profile-mod.page.scss'],
})
export class ProfileModPage implements OnInit {

  modForm:FormGroup;

  usuario:any;
  userId:any;
  userdata:Users={
    id: 0,
    username: "",
    email: "",
    password: "",
    name1: "",
    name2: "",
    name3: "",
    name4: "",
    phone: "",
    isactive: false,
    tipo: 0
  };

  constructor(
    private menucontroller:MenuController,
    private authservice:AuthService, 
    private router:Router, 
    private aroute:ActivatedRoute,
    private toast: ToastController,
    private alertcontroller: AlertController, 
    private fBuilder: FormBuilder
  ) 
  {
    this.modForm = this.fBuilder.group({
      'email' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
      'name1' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'name2' : new FormControl("", [Validators.minLength(3)]),
      'name3' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'name4' : new FormControl("", [Validators.minLength(3)]),
      'phone' : new FormControl("", [Validators.required, Validators.minLength(8)]),
    })
  }
  
  ngOnInit() {
    this.usuario = sessionStorage.getItem('username');
    console.log('username:', this.usuario);

    if (this.usuario) {
      this.authservice.GetUserByUsername(this.usuario).subscribe(data => {
        const user = Array.isArray(data) ? data[0] : data;
        this.userId = user.id;
        this.modForm.patchValue({
          email: user.email,
          password: user.password,
          name1: user.name1,
          name2: user.name2,
          name3: user.name3,
          name4: user.name4,
          phone: user.phone
        });
      },
      error => {
        console.error('Error al cargar el usuario', error);
      });
    } else {
      console.error('Username no válido');
    }
  }

  modPerfil() {
    if (this.modForm.valid) {
      this.userdata = {...this.userdata,
        username:this.usuario,
        email: this.modForm.value.email,
        password: this.modForm.value.password,
        name1: this.modForm.value.name1,
        name2: this.modForm.value.name2,
        name3: this.modForm.value.name3,
        name4: this.modForm.value.name4,
        phone: this.modForm.value.phone,
        isactive: true,
        tipo: 2
      };
      this.authservice.UpdateUser(this.userId, this.userdata).subscribe(
        () => {
          this.modified();
          this.router.navigate(['/tabs/profile']);
        },
        error => {
          console.error('Error al actualizar el usuario:', error);
        }
      );
    } else {
      console.error('Formulario no válido');
    }
  }


  async modified(){
    const alerta = await this.alertcontroller.create({
      header: 'Modificado',
      message: "Usuario modificado",
      buttons: ['OK']
    });
    alerta.present();
  }

  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('zapl')
  }
  goBack(){
    this.router.navigate(['/tabs/profile']);
  }
}
