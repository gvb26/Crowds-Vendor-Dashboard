import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DealDashboardComponent } from '../deal-dashboard/deal-dashboard.component';

@Component({
  selector: 'app-deal-buttons',
  templateUrl: './deal-buttons.component.html',
  styleUrls: ['./deal-buttons.component.scss']
})
export class DealButtonsComponent implements OnInit {
  
  isLeftVisible = true;
  
  @Output("clicked") clicked = new EventEmitter<boolean>();

  toExpiredDeals() {
    this.clicked.emit();
    // this.dealsDash.expiredDeals();  
  }

  constructor(private dealsDash: DealDashboardComponent, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    public dialog: MatDialog) { 
      iconRegistry.addSvgIcon(
        'add',
        sanitizer.bypassSecurityTrustResourceUrl('assets/round-add-24px.svg')
        );
     }

  ngOnInit() {
  }

}
