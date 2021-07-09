import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-crowds-button',
  templateUrl: './crowds-button.component.html',
  styleUrls: ['./crowds-button.component.scss']
})
export class CrowdsButtonComponent implements OnInit {

  @Input('color') color: string;
  @Input('text') text: string;
  @Input('link') link: string;
  @Input('noLink') noLink: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  

}
