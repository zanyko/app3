import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileModPageRoutingModule } from './profile-mod-routing.module';

import { ProfileModPage } from './profile-mod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfileModPageRoutingModule
  ],
  declarations: [ProfileModPage]
})
export class ProfileModPageModule {}
