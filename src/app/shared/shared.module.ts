// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


// Components
import { CrowdsNavbarComponent } from './crowds-navbar/crowds-navbar.component';
import { CrowdsButtonComponent } from './crowds-button/crowds-button.component';
import { CrowdsHeaderComponent } from './crowds-header/crowds-header.component';

// External Modules
import { 
        MatChipsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatButtonModule,
        MatCheckboxModule
       } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { BarChartModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [CrowdsNavbarComponent, 
                 CrowdsButtonComponent, CrowdsHeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

    // External Modules
    MatChipsModule,
    FlexLayoutModule,
    NgxChartsModule,
    NgbModule,
    MatIconModule
  ],
  exports:[
    // Modules
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Components
    CrowdsNavbarComponent, 
    CrowdsButtonComponent,
    CrowdsHeaderComponent,
    
    // External Modules
    FlexLayoutModule,
    MatChipsModule,
    MatToolbarModule,
    MatSidenavModule,
    NgxChartsModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    ChartsModule,
    BarChartModule,
    NgbModule,
  ]
})
export class SharedModule { }
