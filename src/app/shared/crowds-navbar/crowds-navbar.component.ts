import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SignoutService } from '../../dashboard/services/signout.service';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'crowds-navbar',
  templateUrl: './crowds-navbar.component.html',
  styleUrls: ['./crowds-navbar.component.scss']
})
export class CrowdsNavbarComponent implements OnInit {
  
  currentStepValue = 10;
  step = 1;
  maxSteps = 10;

  @Input('editMode') editMode = false;
  @Input('editDeal') editDeal = false;
  @Input('progress') progress = false;
  @Output('cancelled') cancelled = new EventEmitter();
  @Output('saved') saved = new EventEmitter();
  @Output('deleted') deleted = new EventEmitter();
  
  constructor(private loginService: LoginService, private signOutService: SignoutService) {
    this.loginService.configure();
  }
  
  ngOnInit() {
    this.loginService.authenticateUser();
  }

  signOut() {
    this.signOutService.vendorSignOut();
  }

  delete(){
    this.deleted.emit();
  }

  cancel(){
    this.cancelled.emit();
  }

  save(){
    this.saved.emit();
  }

  goToNextStep(){
    this.currentStepValue += 12.5;
    this.step += 1;
  }

  goToPreviousStep(){
    this.currentStepValue -= 12.5;
    this.step -= 1;
  }

  maxStepsUp(){
    this.maxSteps += 1;
  }

  maxStepsDown(){
    this.maxSteps -= 1;
  }

}
