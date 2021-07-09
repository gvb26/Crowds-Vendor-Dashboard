// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { CrowdSizeComponent } from './crowd-size/crowd-size.component';
import { AgeDemographicsComponent } from './age-demographics/age-demographics.component';
import { GenderDemographicsComponent } from './gender-demographics/gender-demographics.component';
import { CurrentCrowdSizeComponent } from './current-crowd-size/current-crowd-size.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FootTrafficComponent } from './foot-traffic/foot-traffic.component';
import { DealDashboardComponent } from '../deals/deal-dashboard/deal-dashboard.component';
import { DealButtonsComponent } from '../deals/deal-buttons/deal-buttons.component';
import { DealsModule } from '../deals/deals.module';
import { SlidePanelComponent } from '../deals/deal-dashboard/slide/slide-panel/slide-panel.component';


@NgModule({
  declarations: [CrowdSizeComponent, AgeDemographicsComponent, 
    GenderDemographicsComponent, CurrentCrowdSizeComponent, 
    DashboardComponent, FootTrafficComponent, DealDashboardComponent, DealButtonsComponent, SlidePanelComponent],

  imports: [
    CommonModule,
    SharedModule
  ],

  providers: [DealDashboardComponent]
})
export class DashboardModule { }
