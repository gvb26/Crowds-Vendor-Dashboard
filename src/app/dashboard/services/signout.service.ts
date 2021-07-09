import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignoutService {
  
  vendorSignOut() {
    Auth.signOut({ global: true })
    .then(data => console.log(data))
    .catch(err => console.log(err));
    localStorage.removeItem('TokenExp');
    this.snackbar.open("Sign Out Successful!", 'Close', { duration: 5000, verticalPosition: 'bottom' });
    this.router.navigate(['../../login']);
  }

  constructor(private snackbar: MatSnackBar, private router:Router) { }
}
