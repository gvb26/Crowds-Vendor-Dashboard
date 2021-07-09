import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';
import { APIService, LocationInsertInput } from './../../API.service';
import { Injectable } from '@angular/core';
import { Location, Locations } from '../locations';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class LocationService{

  locations: Locations;
  location:LocationInsertInput;

  private locations_data = new BehaviorSubject(this.locations);
  private current_locations_data = this.locations_data.asObservable();

  constructor(private api:APIService, private loginService: LoginService,
    private snackbar:MatSnackBar) {

  }

  getLocation(id: string)//:Location
  {
    // let location:Location;
    // this.getLocations().forEach( loc=>{
    //   if(loc.id === parseInt(id)){
    //     location = loc;
    //   }
    // })
    // return location;
  }

  async getLocations(){
    let locations;
    await this.loginService.getVendor()
      .then(async data=>{
        await this.api.GetLocationByVendorId(data.vendorID)
          .then(data =>{
            console.log(data);
            locations = data;
            this.locations_data.next(locations);
          })
          .catch(err =>{
            console.log(err)
          })
      })
      .catch(err=>{
        console.log(err)
      })

    return locations;
  }

  async createLocation(name: string, capacity:number, city:string, 
                        state:string, zip:string, str_addr:string, 
                        phone:string, website:string, locationType: number){
    this.loginService.configure();
    this.loginService.getVendor()
      .then(async data=>{
        console.log(data);
        this.location = {
          p_name: name,
          p_vendorID: data.vendorID,
          p_budgetID: 1,
          p_locationTypeID: locationType,
          p_totalCapacity: capacity,
          p_city: city,
          p_state: state,
          p_zipCode: zip,
          p_lat: 1.2,
          p_lng: 1.1,
          p_streetAddress: str_addr,
          p_phoneNumber: phone,
          p_website: website,
          p_moreInformation: "Hello"
        };

        await this.api.InsertLocation(this.location)
          .then(data =>{
            console.log(data)
            this.snackbar.open("New location created successfully", 'Close', {
              duration: 5000});
          })
          .catch(err =>{
            console.log(err)
          })
      })
      .catch(err=>{
        console.log(err)
      })
  }

  async insertLocationHours(day: number, openTime: string, closeTime: string){

    // await this.api.GetLocation()
    // await this.api.InsertLocationHours({
    //   p_locationID: Int!,
	  //   p_dayOfTheWeekID: day,
	  //   p_openTime: openTime,
	  //   p_closeTime: closeTime!
    // })
  }

}
