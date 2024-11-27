import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileModPage } from './profile-mod.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileModPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileModPageRoutingModule {}
