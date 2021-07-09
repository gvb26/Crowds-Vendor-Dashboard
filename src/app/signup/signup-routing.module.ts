import { ConfirmSignupComponent } from './confirm-signup/confirm-signup.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResendCodeComponent } from './resend-code/resend-code.component';

const routes: Routes = [
  {
    path: 'credentials',
    component: CredentialsComponent
  },
  {
    path: 'confirm',
    component: ConfirmSignupComponent 
  },
  {
    path: 'code',
    component: ResendCodeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
