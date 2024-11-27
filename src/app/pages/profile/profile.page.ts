import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CruduserService } from 'src/app/services/cruduser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  dataForm:FormGroup;
  usuario:any;
  userId:any;
  typename:string="";

  constructor(
    private menucontroller:MenuController,
    private authservice:AuthService, 
    private router:Router,
    private fBuilder: FormBuilder,
    private crudTipo : CruduserService,
  ) 
  {
    this.dataForm = this.fBuilder.group({
      'username' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'email' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
      'name1' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'name2' : new FormControl("", [Validators.minLength(3)]),
      'name3' : new FormControl("", [Validators.required, Validators.minLength(3)]),
      'name4' : new FormControl("", [Validators.minLength(3)]),
      'phone' : new FormControl("", [Validators.required, Validators.minLength(8)]),
      'type'  : new FormControl("",)
    })
  }

  ngOnInit() {
    this.usuario = sessionStorage.getItem('username');
    console.log('username:', this.usuario);

    if (this.usuario) {
      this.authservice.GetUserByUsername(this.usuario).subscribe(data => {
        const user = Array.isArray(data) ? data[0] : data;
        this.userId = user.id;

        console.log('user.tipo: ', user.tipo);
        this.crudTipo.getById(user.tipo).subscribe(nombre => {
          this.typename = nombre;
          console.log('typename: ', this.typename);
          this.dataForm.patchValue({
            type: this.typename
          });
        }, 
          error => {console.error('Error al obtener el nombre del TipoUsuario', error);}
        );

        this.dataForm.patchValue({
          username: user.username,
          email: user.email,
          name1: user.name1,
          name2: user.name2,
          name3: user.name3,
          name4: user.name4,
          phone: user.phone,
          type: this.typename,
        });
      },
      error => {
        console.error('Error al cargar el usuario', error);
      });
    } else {
      console.error('Username no válido');
    }
  }
  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('zapl')
  }
  mod(){
    this.router.navigate(['/tabs/profile-mod']);
  }
}
