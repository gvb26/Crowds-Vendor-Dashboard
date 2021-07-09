import { menu_default } from './../location-defaults';
import { Component, OnInit, Input, Inject, AfterViewInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input('editable') editable: boolean = false;
  @Input('parentForm') parentForm: FormGroup = this.fb.group({});
  @Input('data') menu:any[];
  
  category_mouseenter: boolean = false;
  item_mouseenter: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private fb: FormBuilder) {
  }

  ngOnInit() {
    if(Object.entries(this.data).length === 0 && this.data.constructor === Object){
      this.data = menu_default;
    }else{
      this.menu = this.data;
    }

    if(this.menu === null || typeof this.menu === "undefined"){
      this.menu = menu_default;
    }
    
    this.buildMenuFormData();
  }

  get menu_items(){
    return this.parentForm.get('menu_items') as FormArray;
  }

  buildMenuFormData(){
    
    this.parentForm.setControl('menu_items', this.fb.array([]));

    this.menu.forEach(category=>{
      let categoryFormGroup = this.fb.group({});
      categoryFormGroup.setControl('name', this.fb.control({value: null, disabled: !this.editable}));
      categoryFormGroup.setControl('items', this.fb.array([]));
      this.menu_items.push(categoryFormGroup);
      
      category.items.forEach(item=>{
        let itemFormGroup = this.fb.group({});
        itemFormGroup.setControl('name', this.fb.control({value: null, disabled: !this.editable}));
        itemFormGroup.setControl('desc', this.fb.control({value: null, disabled: !this.editable}));
        itemFormGroup.setControl('price', this.fb.control({value: null, disabled: !this.editable}));
        (this.menu_items.at(category.id).get('items') as FormArray)
          .push(itemFormGroup);
      })
    })
    //console.log(this.menu_items);
  }

  addNewItem(category){
    for(let i = 0; i < this.menu.length; i++){
      if(this.menu[i].id == category.id){
        this.menu[i].items.push(
          {
            id: category.items.length,
            name: "",
            desc: "",
            price: null
          }
        )
        let itemFormGroup = this.fb.group({});
        itemFormGroup.setControl('name', this.fb.control({}));
        itemFormGroup.setControl('desc', this.fb.control({}));
        itemFormGroup.setControl('price', this.fb.control({}));

        (this.menu_items.at(category.id).get('items') as FormArray)
          .push(itemFormGroup);
        
      }
    }
    //console.log(this.menu_items);
  }

  removeLastItem(category){
    for(let i = 0; i < this.menu.length; i++){
      if(this.menu[i].id == category.id){
        this.menu[i].items.pop();
        (this.menu_items.at(category.id).get('items') as FormArray)
          .removeAt(category.items.length - 1);
      }
    }
    //console.log(this.menu_items);
  }

  removeLastCategory(menu){
    this.menu.pop();
    this.menu_items.removeAt(menu.length - 1);
    //console.log(this.menu_items);
  }

  displayCategoryActions(){
    this.category_mouseenter = true;
  }

  hideCategoryActions(){
    this.category_mouseenter = false;
  }

  displayItemActions(){
    this.item_mouseenter = true;
  }

  hideItemActions(){
    this.item_mouseenter = false;
  }

}

