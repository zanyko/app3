import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(private menucontroller:MenuController) {}


  ngOnInit() {
  }
  
  camera(){
    
  }
  
  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('zapl')
  }
}