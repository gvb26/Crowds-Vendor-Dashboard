import { Component, OnInit } from '@angular/core';
import { DealDashboardComponent } from 'src/app/deals/deal-dashboard/deal-dashboard.component';
import { DealButtonsComponent } from 'src/app/deals/deal-buttons/deal-buttons.component';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading = true;

  showExpiredDeals(deal:DealDashboardComponent, buttons:DealButtonsComponent) {
      deal.isLeftVisible = !deal.isLeftVisible;    
      buttons.isLeftVisible = !buttons.isLeftVisible;
  }

  constructor(private loginService: LoginService) {
   }

  ngOnInit() {
    this.loginService.authenticateUser();
  }

  stopLoading(){
    this.loading = false;
  }

}