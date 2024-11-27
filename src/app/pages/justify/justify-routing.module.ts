import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustifyPage } from './justify.page';

const routes: Routes = [
  {
    path: '',
    component: JustifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustifyPageRoutingModule {}
