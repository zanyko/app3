import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JustifyPageRoutingModule } from './justify-routing.module';

import { JustifyPage } from './justify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JustifyPageRoutingModule
  ],
  declarations: [JustifyPage]
})
export class JustifyPageModule {}
