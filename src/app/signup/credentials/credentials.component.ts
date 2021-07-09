import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {

  input_type:string = "password";
  hidden:boolean = true;
  loading = false;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  toggleEye(){
    this.hidden = !this.hidden;
    this.input_type = this.hidden ? "password" : "text";
  }

  signup(email:string, password:string){
    this.loading = true;
    this.signupService.saveCredentials(email, password);
    this.signupService.registerUser()
      .finally(()=>{
        this.loading = false;
      });
  }
}
