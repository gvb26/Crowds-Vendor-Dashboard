import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-resend-code',
  templateUrl: './resend-code.component.html',
  styleUrls: ['./resend-code.component.scss']
})
export class ResendCodeComponent implements OnInit {

  loading = false;

  constructor(private service:SignupService) { }

  ngOnInit() {
  }

  resendCode(email:string){
    this.loading = true;
    this.service.resendCode(email)
      .finally(()=>{
        this.loading = false
      })
  }

}
