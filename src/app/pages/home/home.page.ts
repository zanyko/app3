import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menucontroller:MenuController) {}
  ngOnInit() {
  }
  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('zapl')
  }
}
