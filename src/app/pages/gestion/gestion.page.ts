import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CrudasigService } from 'src/app/services/crudasig.service';
import { CrudclassService } from 'src/app/services/crudclass.service';
import { Clases } from 'src/interfaces/clases';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

  usuario:any;
  userId:number=0;

  klasses:{ 
    id:number;
    iddocente:number;
    idalumno:number;
    idasig:number;
    asistencias:number;
    name:string;
    dc:string;
  }[]=[];

  constructor(
    private menucontroller:MenuController,
    private router:Router,
    private authservice:AuthService,
    private crudasig:CrudasigService,
    private crudclass:CrudclassService,
  )
  {
    this.usuario = sessionStorage.getItem('username');
    this.authservice.getIdByUsername(this.usuario).subscribe(
      id => {this.userId; console.log('iddddd',this.userId);}
    );
    
  }



  ngOnInit() {
    this.authservice.getIdByUsername(this.usuario).subscribe(id => {
      console.log("ID del usuario:", id);
      this.userId = id;
      console.log('id: ', this.userId);

      this.crudclass.getClasesByDocente(this.userId).subscribe(data => {
        for (let i of data) {
          console.log(i.idasig);
          const name$ = this.crudasig.getNameByIdAsig(i.idasig);
          const dc$ = this.authservice.getNameById(i.iddocente);

          forkJoin([name$, dc$]).subscribe(([name, dc]) => {
            let ks = {
              id: Number(i.id),
              iddocente: i.iddocente,
              idalumno: i.idalumno,
              idasig: i.idasig,
              asistencias: i.asistencias,
              name: name,
              dc: dc
            };
            this.klasses.push(ks);
          });
        }

        console.log('Clases: ', this.klasses);
      });

    }, error => {
      console.error("Error:", error.message);
    });
    
  }



  verClase(id:number){
    this.router.navigate(['/tabs/clase'],{queryParams:{id:id}});
  }

  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('zapl');
  }
}
