import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-cap',
  templateUrl: './max-cap.component.html',
  styleUrls: ['./max-cap.component.scss']
})
export class MaxCapComponent implements OnInit {

  constructor(private signupService: SignupService) { }
  
  disabled = false;
  invert = false;
  max = 300;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 1;
  vertical = false;

  ngOnInit() {
  }

  // saveData(capacity: string){
  //   this.signupService.addCapacity(String(capacity));
  // }

}
