import { NewDealComponent } from './deals/new-deal/new-deal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationScreenComponent } from './location/location-screen/location-screen.component';
import { LocationEditComponent } from './location/location-edit/location-edit.component';
import { MenuComponent } from './location/menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LocationTabComponent } from './location/location-tab/location-tab.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'signup',
    loadChildren: './signup/signup.module#SignupModule'
  },
  {
    path: 'location-edit/:id',
    component: LocationEditComponent
  },
  {
    path: 'new-location',
    component: LocationEditComponent
  },
  {
    path: 'locations',
    component: LocationTabComponent
  },
  {
    path: 'location',
    component: LocationScreenComponent
  },
  {
    path: 'location-edit',
    component: LocationEditComponent
  },
  {
    path: 'location-tab',
    component: LocationTabComponent
  },
  {
    path: 'new-deal',
    component: NewDealComponent
  },
  {
    path: 'edit-deal/:id',
    component: NewDealComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
