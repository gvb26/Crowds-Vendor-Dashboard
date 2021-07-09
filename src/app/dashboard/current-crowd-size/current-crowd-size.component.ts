import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-crowd-size',
  templateUrl: './current-crowd-size.component.html',
  styleUrls: ['./current-crowd-size.component.scss']
})
export class CurrentCrowdSizeComponent implements OnInit {

  // make this variable dynamic once server is connected
  number: number = 49;

  constructor() { }

  ngOnInit() {
  }

}
