import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { SlidePanelComponent } from './slide/slide-panel/slide-panel.component';
import { DealService } from '../services/deal.service';

@Component({
  selector: 'app-deal-dashboard',
  templateUrl: './deal-dashboard.component.html',
  styleUrls: ['./deal-dashboard.component.scss']
})

export class DealDashboardComponent implements OnInit {

  @Output('loaded') loaded = new EventEmitter();

  isLeftVisible = true;
  activeDeals: any = [];
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    public dialog: MatDialog, private dealService: DealService) {
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-edit-24px.svg')
    );
  }


  ngOnInit() {
    this.dealService.getLocationDeals().then(data =>{
      this.activeDeals = data;
      console.log(this.activeDeals);
      this.loaded.emit();
    })
    
  }

}
