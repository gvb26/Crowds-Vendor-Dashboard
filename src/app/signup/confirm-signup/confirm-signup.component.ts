import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-signup',
  templateUrl: './confirm-signup.component.html',
  styleUrls: ['./confirm-signup.component.scss']
})
export class ConfirmSignupComponent implements OnInit {

  loading = false;

  constructor(private service:SignupService, private router:Router) { }

  ngOnInit() {
  }

  confirmSignup(code:string){
    this.loading = true;
    this.service.confirmSignup(code).then(()=>{
      this.loading = false;
      this.router.navigate(['/login']);
    })
  }

  routeToResendCode(){
    this.router.navigate(['/signup/code']);
  }

}
