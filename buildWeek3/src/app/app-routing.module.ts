import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'homepage', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
