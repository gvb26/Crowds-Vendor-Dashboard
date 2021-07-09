import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DealButtonsComponent } from './deal-buttons/deal-buttons.component';
import { DealDashboardComponent } from './deal-dashboard/deal-dashboard.component';
import { SlidePanelComponent } from './deal-dashboard/slide/slide-panel/slide-panel.component';
import { NewDealComponent } from './new-deal/new-deal.component';
import { DealDialogComponent } from './deal-dialog/deal-dialog.component';

@NgModule({
  declarations: [NewDealComponent, DealDialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents:[DealDialogComponent]
})
export class DealsModule { }
