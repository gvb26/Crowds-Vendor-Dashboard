import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private snackbar: MatSnackBar) { }
  
  onSubmit(email: string, password: string) {
    if (email == '' || email == ' ') {
      this.snackbar.open("Your email cannot be empty", 'Close', { duration: 5000, verticalPosition: 'bottom' });
    } else if (password == '' || password == ' ') {
      this.snackbar.open("Your password cannot be empty.", 'Close', { duration: 5000, verticalPosition: 'bottom' });
    } else {
    this.loginService.saveCredentials(email, password);
    }
  }

  input_type:string = "password";
  hidden:boolean = true;

  toggleEye(){
    this.hidden = !this.hidden;
    this.input_type = this.hidden ? "password" : "text";
  }

  ngOnInit() {
    this.loginService.authenticateUser();
  }

}
