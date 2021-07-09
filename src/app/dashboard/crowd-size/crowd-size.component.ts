import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crowd-size',
  templateUrl: './crowd-size.component.html',
  styleUrls: ['./crowd-size.component.scss']
})
export class CrowdSizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Sort options
  sort_options = ['By Hour', 'By Day', 'By Month', 'By Year'];

  // lineChart
  public lineChartData:Array<any> = [
    {data: [null, null, null, null, null, null, 40  , 50  , 40  , null, 40  ,   50,   54, 40  , null, null, null, null, null, 40  , 44], label: 'Crowded'},
    {data: [40  , 35  , null, null, null, 35  , 40  , null, 40  , 38  , 40  , null, null, 40  , 35  , null, null, null, 35  , 40  , null], label: 'Normal'},
    {data: [null, 35  , 25  , 21  , 20  , 35  , null, null, null, null, null, null, null, null, 35  , 29  , 30  , 32  , 35  , null, null], label: 'Not Crowded'}
  ];

  public lineChartLabels:Array<any> = ['11:00', '11:30', '12:00', 
  '12:30', '13:00', '13:30', '14:30', '15:00', '15:30', '16:30', 
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', 
  '20:30', '21:00', '21:30', '22:00'];

  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
          type: 'time',
          time: {
            unit: 'minute',
            unitStepSize: 60,
            format: 'h:mm a',
            tooltipFormat: 'h:mm a'
          },
          //ticks:{
          //  maxTicksLimit: 20,
          //}
      }],
      yAxes: [{
        ticks: {
            beginAtZero: true
        }
    }]
    }
  };
  public lineChartColors:Array<any> = [
    { // crowds red
      backgroundColor: 'rgb(244, 220, 220)',
      borderColor: 'rgb(235, 120, 120)',
      pointBackgroundColor: 'rgb(235, 120, 120)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgb(235, 120, 120)',
      pointHoverBorderColor: 'rgb(235, 120, 120)'
    },
    { // crowds blue
      backgroundColor: 'rgb(220,225,237)',
      borderColor: 'rgb(111,136,200)',
      pointBackgroundColor: 'rgb(111,136,200)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgb(111,136,200)',
      pointHoverBorderColor: 'rgb(111,136,200)'
    },
    { // crowds green
      backgroundColor: 'rgb(220, 239, 227)',
      borderColor: 'rgb(113, 209, 146)',
      pointBackgroundColor: 'rgb(113, 209, 146)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgb(113, 209, 146)',
      pointHoverBorderColor: 'rgb(113, 209, 146)'
    }  
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';
 
  /* events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  } */

}
