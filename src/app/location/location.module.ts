
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { MenuComponent } from './menu/menu.component';
import { LocationScreenComponent } from './location-screen/location-screen.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import { LocationTabComponent } from './location-tab/location-tab.component';


// Services
import { LocationService } from './services/location.service';

// External Modules
import { MAT_DIALOG_DATA } from '@angular/material';

@NgModule({
  declarations: [
    MenuComponent, LocationScreenComponent, 
    LocationEditComponent, MenuDialogComponent,
    LocationTabComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[
    LocationService,
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  entryComponents: [MenuDialogComponent, LocationScreenComponent]
})
export class LocationModule { }
