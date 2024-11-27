import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AutorizadoGuard } from '../guards/autorizado.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule),
        canActivate:[AutorizadoGuard]
      },
      {
        path: 'gestion',
        loadChildren: () => import('../pages/gestion/gestion.module').then( m => m.GestionPageModule),
        canActivate:[AutorizadoGuard]
      },
      {
        path: 'justify',
        loadChildren: () => import('../pages/justify/justify.module').then( m => m.JustifyPageModule),
        canActivate:[AutorizadoGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule),
        canActivate:[AutorizadoGuard]
      },
      {
        path: 'profile-mod',
        loadChildren: () => import('../pages/profile-mod/profile-mod.module').then( m => m.ProfileModPageModule),
        canActivate:[AutorizadoGuard]
      },
      {
        path: 'clase',
        loadChildren: () => import('../pages/clase/clase.module').then( m => m.ClasePageModule),
        canActivate:[AutorizadoGuard]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
