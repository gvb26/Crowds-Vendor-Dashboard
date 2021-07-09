import { LocationService } from './../services/location.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';
import { Router } from '@angular/router';
import { hours_default, cuisines_default, locationTypes_default, menu_default } from '../location-defaults';
import { Location, Cuisine } from '../locations';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-location-screen',
  templateUrl: './location-screen.component.html',
  styleUrls: ['./location-screen.component.scss']
})
export class LocationScreenComponent implements OnInit {
  @Input("editMode") editMode: boolean = false;
  @Input('parentForm') parentForm: FormGroup = this.fb.group({});

  @Input("id") id: string;
  @Input("name") name: string;
  @Input("street_address") street_address: string;
  @Input("city") city: string;
  @Input("state") state: string;
  @Input("zip") zip: string;
  @Input("hours") hours = hours_default;
  @Input("phone") phone: string;
  @Input("website") website: string;
  @Input("capacity") capacity: number;
  @Input("cuisines") cuisines;
  @Input("locationTypeID") locationTypeID;
  @Input("menu") menu;

  locationTypes;

  constructor(public dialog: MatDialog, private router:Router, 
              private fb:FormBuilder, private locationService: LocationService) {
  }

  ngOnInit() {

    if(this.hours === null){
      this.hours = hours_default;
    }

    // Setting cuisines values
    if(this.cuisines === null){
      this.cuisines = cuisines_default;
    }else{
      if(this.editMode){
        var cuisines = JSON.parse(JSON.stringify(cuisines_default)) ;
      cuisines.forEach(cd=>{
        this.cuisines.forEach(c=>{
          if(c.value == cd.value){
            cd.selected = true;
            return;
          }
        })
      })
      this.cuisines = cuisines;
      }
    }

    // Setting LocationTypes Values
    let locationTypes = JSON.parse(JSON.stringify(locationTypes_default));
    if(this.editMode){
      let both = true;
      locationTypes.forEach(lt=>{
        if(lt.value == this.locationTypeID){
          lt.selected = true;
          both = false;
        }
      })
    
      if(both && this.locationTypeID != null){
        locationTypes.forEch(lt=>{
          lt.selected = true;
        })
      }
    }else{
      locationTypes.forEach(lt=>{
        if(lt.value != this.locationTypeID && this.locationTypeID != 3){
          locationTypes.splice(locationTypes.indexOf(lt), 1);
        }
      })
    }

    this.locationTypes = locationTypes;
    

    if(this.menu === null){
      this.menu = menu_default;
    }

    this.parentForm
        .addControl('title', this.fb.control({value: '', disabled: !this.editMode}));
    this.parentForm.addControl('street_address', this.fb.control({value: '',disabled: !this.editMode}));
    this.parentForm.addControl('city', this.fb.control({value: '',disabled: !this.editMode}));
    this.parentForm.addControl('state', this.fb.control({value: '',disabled: !this.editMode}));
    this.parentForm.addControl('zip', this.fb.control({value: '',disabled: !this.editMode}));
    this.parentForm.addControl('hours', this.fb.group({
      monday: this.fb.control({value: '',disabled: !this.editMode}),
      tuesday: this.fb.control({value: '',disabled: !this.editMode}),
      wednesday: this.fb.control({value: '',disabled: !this.editMode}),
      thursday: this.fb.control({value: '',disabled: !this.editMode}),
      friday: this.fb.control({value: '',disabled: !this.editMode}),
      saturday: this.fb.control({value: '',disabled: !this.editMode}),
      sunday: this.fb.control({value: '',disabled: !this.editMode})
    }));
    this.parentForm.addControl('phone', this.fb.control({value: '',disabled: !this.editMode}));
    this.parentForm.addControl('website', this.fb.control({value: '',disabled: !this.editMode}));
    this.parentForm.addControl('capacity', this.fb.control({value: '',disabled: !this.editMode}));
  }

  buildLocationTypes(){
    if(this.locationTypes === null){
      return;
    }

  }

  openMenu(): void {
    this.dialog.open(MenuDialogComponent,{
      height: '100%',
      data: this.menu
    })
  }

  openEditMode():void {
    this.router.navigate(['/location-edit', this.id]);
  }

}

