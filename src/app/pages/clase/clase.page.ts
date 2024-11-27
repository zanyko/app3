import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, AlertController} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CrudasigService } from 'src/app/services/crudasig.service';
import { CrudclassService } from 'src/app/services/crudclass.service';
import { Clases } from 'src/interfaces/clases';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {

  usuario:any;
  userId:number=0;
  idd:number=0;

  iddocente:number=0;
  idalumno:number=0;
  idasig:number=0;
  asistencias:number=0;
  name:string="";
  dc:string="";
  alname:string="";
  email:string="";

  alumnos:{ 
    id:number;
    name:string;
  }[]=[];

  constructor(
    private menucontroller:MenuController,
    private alertcontroller:AlertController,
    private activatedroute: ActivatedRoute,
    private router:Router,
    private authservice:AuthService,
    private crudasig:CrudasigService,
    private crudclass:CrudclassService,
  )
  {
    this.usuario = sessionStorage.getItem('username');
    this.activatedroute.queryParams.subscribe(params => {
      this.idd = params['id'];
    });
  }

  ngOnInit() {
    console.log("idd: ",this.idd)

    this.crudclass.GetById2(this.idd).subscribe(i => {
      if (i) {
          
        const name$ = this.crudasig.getNameByIdAsig(i.idasig);
        const dc$ = this.authservice.getNameById(i.iddocente);
        const gefahlt$ = this.authservice.getNameById(i.idalumno);
        const c$ = this.authservice.getMailById(i.idalumno);

        forkJoin([name$, dc$, gefahlt$, c$]).subscribe(([name, dc, gefahlt,c]) => {
            this.iddocente= i.iddocente;
            this.idalumno= i.idalumno;
            this.idasig= i.idasig;
            this.asistencias= i.asistencias;
            this.name= name;
            this.dc= dc;
            this.alname=gefahlt;
            this.email=c;
        });
          
      } else {
          console.log('No se encontró la clase.');
      }
  });

  }

  async ver(){
    const alerta = await this.alertcontroller.create({
      header: 'Alumno',
      message: `Nombre: ${this.alname}
                Correo: ${this.email}`,
      buttons: ['OK']
    });
    alerta.present();
  };
  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('zapl');
  }
}