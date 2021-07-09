import { SignupService } from '../services/signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-type',
  templateUrl: './location-type.component.html',
  styleUrls: ['./location-type.component.scss']
})
export class LocationTypeComponent implements OnInit {

  typeChips = [
    {
      name: "Restaurant",
      selected: false,
      value: 1
    },
    {
      name: "Bar",
      selected: false,
      value: 2
    },
    {
      name: "Both",
      selected: false,
      value: 3
    }
]
  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  toggleSelection(type) {
    var i: any;
    for (i in this.typeChips) {
      this.typeChips[i].selected = false;
    }
    if (type.selected === true) {
      type.selected = false;
    }
    if (type.selected === false) {
      type.selected = true;
    }
  }

  // saveData(){
  //   let chip:any;
  //   let chip_value: number;

  //   this.typeChips.forEach(function(chip){
  //     if(chip.selected){
  //       chip_value = chip.value
  //     }
  //   });
     
  //   this.signupService.addBusinessType(String(chip_value));
  // }

}
