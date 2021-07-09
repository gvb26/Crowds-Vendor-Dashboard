import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-demographics',
  templateUrl: './age-demographics.component.html',
  styleUrls: ['./age-demographics.component.scss']
})
export class AgeDemographicsComponent implements OnInit {

  single = [
    {
      "name": "18-25",
      "value": 50
    },
    {
      "name": "26-35",
      "value": 30
    },
    {
      "name": "36-45",
      "value": 45
    },
    {
      "name": "46-55",
      "value": 20
    },
    {
      "name": "56-65",
      "value": 15
    },
    {
      "name": "66-100",
      "value": 3
    }
  ];

  //view: any[] = [700, 210];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;

  colorScheme = {
    domain: ['rgb(56, 91, 181)']
  };
/*
  onSelect(event) {
    console.log(event);
  } */

  ngOnInit() {
  }

}
