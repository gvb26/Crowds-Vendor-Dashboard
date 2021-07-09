// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { LocationTypeComponent } from './location-type/location-type.component';
import { CuisineTypeComponent } from './cuisine-type/cuisine-type.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { MaxCapComponent } from './max-cap/max-cap.component';
import { ConfirmSignupComponent } from './confirm-signup/confirm-signup.component';
import { ResendCodeComponent } from './resend-code/resend-code.component';

// Services
import { SignupService } from './services/signup.service';

// External Modules


@NgModule({
  declarations: [LocationTypeComponent, 
                 CuisineTypeComponent, 
                 CredentialsComponent, 
                 MaxCapComponent, 
                 ConfirmSignupComponent, 
                 ResendCodeComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule,

    // External imports
    

  ],
  providers:[
    SignupService
  ]
})
export class SignupModule { }
