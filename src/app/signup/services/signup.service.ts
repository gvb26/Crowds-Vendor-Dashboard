import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private credentials: Vendor = {
    email: '',
    password:''
  }

  // Shape of request to be sent
  private vendor: Vendor = {
    email: '',
    password: ''
  };

  // behaviorSubject objects to share data between components
  private credentials_data = new BehaviorSubject(this.credentials);
  private current_credentials_data = this.credentials_data.asObservable();

  constructor(private snackbar: MatSnackBar, private router:Router) { 
    Auth.configure({
      userPoolId: 'us-east-1_yQZIskK88',
      userPoolWebClientId:'5jfrrja34scaf2f1hmcetpdnck'
    });
  }

  saveCredentials(email: string, password: string){
    this.credentials_data.next({email, password});
  }

  private loadCredentials(){
    // Get current value of credentials
    this.current_credentials_data.subscribe(
      data => {
        this.vendor.email = data.email;
        this.vendor.password = data.password;
      }
    )
  }

  async registerUser(){
    
    this.loadCredentials();

    await Auth.signUp({
      username: this.vendor.email,
      password: this.vendor.password,
      attributes:{
        'custom:accountType': "2"
      }
     })
     .then(data => {
       //console.log(data);
       this.snackbar.open("A verification code has been sent to " + this.vendor.email, 'Close', {
         duration: 5000});
       
       this.router.navigate(['/signup/confirm']);
     })
     .catch(err =>{
       if(err.code === 'UsernameExistsException'){
         this.snackbar.open( err.message, 'Close', {
           duration: 10000});
       }else{
         this.snackbar.open( "An unexpected error occured", 'Close', {
           duration: 5000});
       }
     }); 
  }

  async confirmSignup(code:string){
    
    this.loadCredentials();

    await Auth.confirmSignUp(this.vendor.email, code)
      .then(data =>{
            //console.log(data);
            this.snackbar.open("Registration successful, please login", 'Close', {
            duration: 5000});
      })
      .catch(err=>{
            //console.log(err);
            this.snackbar.open("An error occured", 'Close', {
            duration: 5000});
      });
  }

  async resendCode(email:string){
    
    await Auth.resendSignUp(email)
      .then((data) =>{
        this.snackbar.open("Code sent to " + email, 'Close', {
          duration: 10000});
        this.saveCredentials(email, '');
        this.router.navigate(["/signup/confirm"])
      })
      .catch((err)=>{
        this.snackbar.open(err.message, 'Close', {
          duration: 10000});
      })
  }


}

interface Vendor{
  email: string,
  password: string
}

