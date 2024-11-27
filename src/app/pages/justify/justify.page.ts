import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-justify',
  templateUrl: './justify.page.html',
  styleUrls: ['./justify.page.scss'],
})
export class JustifyPage implements OnInit {

  constructor(private menucontroller:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menucontroller.open('zapl')
  }

}
