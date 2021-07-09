import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuisine-type',
  templateUrl: './cuisine-type.component.html',
  styleUrls: ['./cuisine-type.component.scss']
})
export class CuisineTypeComponent implements OnInit {
  loading = false;

  chips = [
    {
      name: "American",
      selected: false,
      value: 1
    },
    {
      name: "Asian",
      selected: false,
      value: 2
    },
    {
      name: "Coffee and Tea",
      selected: false,
      value: 3
    },
    {
      name: "Deli",
      selected: false,
      value: 4
    },
    {
      name: "Greek",
      selected: false,
      value: 5
    },
    {
      name: "Healthy",
      selected: false,
      value: 6
    },
    {
      name: "Indian",
      selected: false,
      value: 7
    },
    {
      name: "Mediterranean",
      selected: false,
      value: 8
    },
    {
      name: "Italian",
      selected: false,
      value: 9
    },
    {
      name: "Southern",
      selected: false,
      value: 10
    },
    {
      name: "Vegan",
      selected: false,
      value: 11
    },
    {
      name: "Vegetarian",
      selected: false,
      value: 12
    }
  ];
  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  // signup(){
  //   this.loading = true;
  //   let cuisine_types_selected = [];
  //   let cuisine_types: string = '';

  //   // Filter selected chips
  //   this.chips.forEach((chip)=>{
  //     if(chip.selected){
  //       cuisine_types_selected.push(chip.value);
  //     }
  //   });
    
  //   cuisine_types = cuisine_types_selected.toString();
    
  //   this.signupService.addCuisineType(cuisine_types);
  //   this.signupService.registerUser().finally(()=>{
  //     this.loading = false;
  //   });
  // }

}
