import { Component, OnInit } from '@angular/core';
import { single } from './tempdata';

@Component({
  selector: 'app-gender-demographics',
  templateUrl: './gender-demographics.component.html',
  styleUrls: ['./gender-demographics.component.scss']
})
export class GenderDemographicsComponent implements OnInit {

  single: any[];

  //view: any[] = [200, 200];
  
  showXAxis = true;
  showYAxis = true;

  colorScheme = {
    domain: ['#385bb5']
  };

  constructor() { 
    Object.assign(this, { single })
  }

  ngOnInit() {
  }

}
