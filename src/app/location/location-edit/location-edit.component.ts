import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { LocationScreenComponent } from '../location-screen/location-screen.component';
import { LocationService } from '../services/location.service';
import{ Location, LocationType } from '../locations';
@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.scss']
})
export class LocationEditComponent implements OnInit {
    
  parentForm: FormGroup = this.fb.group({});
  location:Location;
  loading = false;

  constructor(private router:Router, private route:ActivatedRoute,
              private fb: FormBuilder, private locationService:LocationService) {  }

  ngOnInit() {
    
    if(this.route.snapshot.routeConfig.path === 'new-location'){
      let id = this.route.snapshot.paramMap.get('id');
      // this.location = this.locationService.getLocation(id);
    }else{
      
    }
  }

  get menu_items(){
    return this.parentForm.get('menu_items') as FormArray;
  }

  addNewMenuSection(menu:MenuComponent){
    menu.menu.push(
      {
        id: menu.menu.length,
        name: "",
        items:[
            {
              id: 0, 
              name: "",
              desc: "",
              price: null
            }
        ]
    });

    let categoryFormGroup = this.fb.group({});
    let itemFormGroup = this.fb.group({}); 
    itemFormGroup.setControl('name', this.fb.control({}));
    itemFormGroup.setControl('desc', this.fb.control({}));
    itemFormGroup.setControl('price', this.fb.control({}));
    categoryFormGroup.setControl('name', this.fb.control({}));
    categoryFormGroup.setControl('items', this.fb.array([
      itemFormGroup
    ]))

    this.menu_items.push(categoryFormGroup);

    //console.log(this.menu_items);
  }

  cancel(){
    this.router.navigate(['/locations'])
  }

  save(locationInfo:LocationScreenComponent){
    this.loading = true;
     console.log(this.parentForm.value);
    // console.log(locationInfo.cuisines);
    // console.log(locationInfo.locationTypes);
    let formValue = this.parentForm.value;
    this.locationService.createLocation(
      formValue.title,
      formValue.capacity,
      formValue.city,
      formValue.state,
      formValue.zip,
      formValue.street_address,
      formValue.phone,
      formValue.website,
      this.prepareLocationTypes(locationInfo.locationTypes)
    )
    .then( ()=>{
        // this.locationService.insertLocationHours(1, 
        //   formValue.hours.monday.split(" - ")[0],
        //   formValue.hours.monday.split(" - ")[1])
        this.loading = false;
        this.router.navigate(['/locations']);
      }
    )
  }

  private prepareLocationTypes(locationTypes:LocationType[]):number{
    let locationType = "";

    locationTypes.forEach(locType=>{
      if(locType.selected && locType.name === "Restaurant"){
        locationType += "1";
      }

      if(locType.selected && locType.name === "Bar"){
        locationType += "2";
      }
    })

    return (locationType == "12") ? 3 : parseInt(locationType);
  }

}
