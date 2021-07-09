import { Injectable } from '@angular/core';
import { LoginComponent } from './login.component';
import { APIService } from '../API.service';
import { Auth } from 'aws-amplify';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private credentials = {
    email: '',
    password: ''
  };

  private trueCred = {
    email: '',
    password: ''
  };
  
  private lowerCaseEmail: string;
  private login_data = new BehaviorSubject(this.credentials);
  private current_login_data = this.login_data.asObservable();

  constructor(private api: APIService, private snackbar: MatSnackBar, private router: Router) {
    this.configure();
  }

  configure() {
    Auth.configure({
      userPoolId: 'us-east-1_yQZIskK88',
      userPoolWebClientId: '5jfrrja34scaf2f1hmcetpdnck'
    });
  }

  async getVendor() {
    let vendor: Vendor;
    await this.api.GetVendor(localStorage.getItem("username"))
      .then(data => {
        vendor = data;
        localStorage.setItem("vendorID", data.vendorID + '')
      })
      .catch(error => {
        console.log(error)
      })
    return vendor;
  }

  saveCredentials(email: string, password: string) {
    this.login_data.next({ email, password });
    this.verifyVendor(this.credentials.email, this.credentials.password);
  }

  async verifyVendor(email, password) {
    this.current_login_data.subscribe(
      data => {
        this.trueCred.email = data.email;
        this.trueCred.password = data.password;
      }
    )
    
    this.lowerCaseEmail = this.trueCred.email.toLowerCase();
    const user = await Auth.signIn(this.lowerCaseEmail, this.trueCred.password)
      .then(data => {
        // These challenges will likely not be used, however, just included in case
        if (data.challengeName === 'NEW_PASSWORD_REQUIRED') {
          this.snackbar.open("You must reset your password!", 'Close', { duration: 5000, verticalPosition: 'bottom' });
        } else if ((data.challengeName === 'SMS_MFA' || data.challengeName === 'SOFTWARE_TOKEN_MFA')) {
          this.snackbar.open("A second factor of authentication is required.", 'Close', { duration: 5000, verticalPosition: 'bottom' });
        } else if (data.challengeName === 'MFA_SETUP') {
          this.snackbar.open("Please set up multi factor authentication.", 'Close', { duration: 5000, verticalPosition: 'bottom' });
        } else {
          localStorage.setItem("username", data.username);
          this.router.navigate(['../dashboard']);
        }
      })
      .catch(err => {
        if (err.code === 'UserNotConfirmedException') {
          this.snackbar.open("Your account is not yet confirmed, you will be routed momentarily.", 'Close', { duration: 5000, verticalPosition: 'bottom' });
          this.router.navigate(['/signup/code']);
          //console.log(err);
        } else if (err.code === 'PasswordResetRequiredException') {
          //console.log(err);
        } else if (err.code === 'UserNotFoundException') {
          this.snackbar.open("These login credentials do not exist. Please use valid credentials.", 'Close', { duration: 5000, verticalPosition: 'bottom' });
          //console.log(err);
        } else if (err.code === 'NotAuthorizedException') {
          this.snackbar.open("Your username or password is incorrect! Please try again.", 'Close', { duration: 5000, verticalPosition: 'bottom' });
        } else {
          console.log(err);
        }
      })
  }

  authenticateUser() {
    var today: number = Date.now()
    var epoch = today / 1000;
    var expTime = parseInt(localStorage.getItem('TokenExp'));

    Auth.currentAuthenticatedUser()
      .then(user => {
        if (epoch > expTime) {
          Auth.signOut({ global: true })
          //.then(data => console.log(data))
          //.catch(err => console.log(err));
          //console.log("User has timed out. Force sign-in.")
          this.snackbar.open("Your session has timed out! Please sign in again.", 'Close', { duration: 5000, verticalPosition: 'bottom' });
          localStorage.removeItem('TokenExp');
          this.router.navigate(['../../login']);
        } else {
          //console.log(user);
          //console.log("User is properly authenticated")
          localStorage.setItem('TokenExp', user.signInUserSession.accessToken.payload.exp);
        }
      })
      .catch(err => {
        this.snackbar.open("You are not authenticated! Routing to login screen.", 'Close', { duration: 5000, verticalPosition: 'bottom' });
        this.router.navigate(['../../login']);
        //console.log(err);
      });
  }

}

interface Vendor {
  accountID: number,
  accountTypeID: number,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  statusID: number,
  vendorID: number
}