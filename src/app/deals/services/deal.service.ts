import { Injectable } from '@angular/core';
import { APIService, LocationDealInsertInput, LocationDealUpdateInput } from '../../API.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  locationID: number = 6;
  name: string;
  title: string;

  constructor(private api: APIService, private router:Router,
              private snackbar: MatSnackBar) { }

  async getLocationDeals() {
    var locations;
    await this.api.GetLocationDealsByLocation(this.locationID).then(data=> {
      locations = data;
    });  
    return locations;
  }

  async getDealByID(id:number){
    let deal;
    await this.api.GetLocationDeal(id)
      .then(data=>{
        deal = data;
      })
      .catch(err=>{
        console.log(err);
      })
    return deal;
  }

  async addNewDeal(type, discount, title, desc, valueOff, 
    image, startDate, endDate, recurring, recfID, startTime, 
    endTime){
    let deal:LocationDealInsertInput = {
      p_locationID: 6,
      p_dealTypeID: type,
      p_discountTypeID: discount,
      p_name: title,
      p_description: desc,
      p_valueOff: valueOff,
      p_featuredImage: 'image',
      p_finePrint: desc,
      p_startDate: startDate,
      p_endDate: endDate,
      p_recurring: recurring,
      p_recurringFrequencyID: recfID,
      p_startTime: startTime,
      p_endTime: endTime,
      p_statusID: 1
    }

    console.log(deal);

    await this.api.InsertLocationDeal(deal)
      .then(data => {
        console.log(data)
        this.snackbar.open("Deal created successfully", 'Close', {
          duration: 5000});
      })
      .catch(err =>{
        console.log(err)
        this.snackbar.open("An unexpected error occurred", 'Close', {
          duration: 5000});
      })
  }

  async updateDeal(dealID, locationID, type, 
    discount, title, desc, valueOff, image, startDate,
    endDate, recurring, recfID, startTime, endTime){

    let deal:LocationDealUpdateInput = {
      p_locationDealID: dealID,
      p_locationID: locationID,
      p_dealTypeID: type,
      p_discountTypeID: discount,
      p_name: title,
      p_description: desc,
      p_valueOff: valueOff,
      p_featuredImage: 'image',
      p_finePrint: desc,
      p_startDate: startDate,
      p_endDate: endDate,
      p_recurring: recurring,
      p_recurringFrequencyID: recfID,
      p_startTime: startTime,
      p_endTime: endTime,
      p_statusID: 1
    }

    await this.api.UpdateLocationDeal(deal)
      .then(data => {
        console.log(data)
        this.snackbar.open("Deal updated successfully", 'Close', {
          duration: 5000});
      })
      .catch(err =>{
        console.log(err)
        this.snackbar.open("An unexpected error occurred", 'Close', {
          duration: 5000});
      })
  }

  async deleteDeal(locationID, dealID){
    await this.api.DeleteLocationDeal(
      locationID, dealID
    ).then(data => {
      console.log(data)
      this.snackbar.open("Deal deleted successfully", 'Close', {
        duration: 5000});
    })
    .catch(err =>{
      console.log(err)
      this.snackbar.open("An unexpected error occurred", 'Close', {
        duration: 5000});
    })
  }
}
