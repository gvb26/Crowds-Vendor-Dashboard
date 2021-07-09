import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-tab',
  templateUrl: './location-tab.component.html',
  styleUrls: ['./location-tab.component.scss']
})
export class LocationTabComponent implements OnInit {

  locations;
  loading = false;

  constructor(private locationService:LocationService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.locationService.getLocations()
      .then(data=>{
        this.locations = data;
        this.loading = false;
      })
  }

  addNewLocation(){
    this.router.navigate(['/new-location']);
  }

}
