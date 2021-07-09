import { DealDialogComponent } from './../deal-dialog/deal-dialog.component';
import { Component, OnInit, ViewChild, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MatChip, MatProgressBar, MatDialog } from '@angular/material';
import { CrowdsNavbarComponent } from 'src/app/shared/crowds-navbar/crowds-navbar.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DealService } from '../services/deal.service';

@Component({
  selector: 'app-new-deal',
  templateUrl: './new-deal.component.html',
  styleUrls: ['./new-deal.component.scss']
})
export class NewDealComponent implements OnInit {

  @ViewChild(CrowdsNavbarComponent)
  private navbar: CrowdsNavbarComponent;

  @ViewChild(MatProgressBar)
  private progressBar: MatProgressBar;

  editMode = false;

  loading = false;

  currentDeal;

  form: FormGroup = new FormGroup({});

  dealImages = [];

  dealTypes = [
    "Regular",
    "Happy Hour",
    "Exclusive"
  ];

  discountTypes = [
    "Dollars Off",
    "Percentage Off"
  ];

  limitedTimeDealChips = [
    {
      name: "Yes",
      selected: false
    },
    {
      name: "No",
      selected: false
    }
  ]

  recDealsChips = [
    {
      name: "Yes",
      selected: false
    },
    {
      name: "No",
      selected: false
    }
  ]

  recDays = [
    {
      day: "Mon",
      selected: false,
    },
    {
      day: "Tu",
      selected: false,
    },
    {
      day: "Wed",
      selected: false,
    },
    {
      day: "Th",
      selected: false,
    },
    {
      day: "Fri",
      selected: false,
    },
    {
      day: "Sat",
      selected: false,
    },
    {
      day: "Sun",
      selected: false,
    }
  ]

  showDiscountType = false;
  showDealLocation = false;
  showDealAmount = false;
  dollaOff = false;
  showLimitedTimeDeal = false;
  showDealStartEndDate = false;
  showDealEndDate = true;
  showRecurringDeal = false;
  showRecurringPeriod = false;
  showDealTitle = false;
  showDealDesc = false;
  showDealImage = false;
  showSelectDays = false;
  
  // showDiscountType = true;
  // showDealLocation = true;
  // showDealAmount = true;
  // dollaOff = false;
  // showLimitedTimeDeal = true;
  // showDealStartEndDate = true;
  // showDealEndDate = true;
  // showRecurringDeal = true;
  // showRecurringPeriod = true;
  // showDealTitle = true;
  // showDealDesc = true;
  // showDealImage = true;
  // showSelectDays = true;

  constructor(private fb:FormBuilder, private router:Router,
              private route:ActivatedRoute , private dealService:DealService,
              private changeDetector: ChangeDetectorRef,
              private dialog:MatDialog) { }

  ngOnInit() {
    this.form = this.fb.group({
      type: [''],
      discount: [''],
      location: [''],
      valueOff: [''],
      startDate: [''],
      endDate: [''],
      startTime: [''],
      endTime: [''],
      recurringPeriod: [''],
      recurringDays: this.fb.group({
        Mon: [''],
        Tu: [''],
        Wed: [''],
        Th: [''],
        Fri: [''],
        Sat: [''],
        Sun: ['']
      }),
      title: [''],
      desc: ['']
    })

    if(this.route.snapshot.routeConfig.path === 'edit-deal/:id'){
      this.showDiscountType = true;
      this.showDealLocation = true;
      this.showDealAmount = true;
      this.showLimitedTimeDeal = true;
      this.showDealStartEndDate = true;
      this.showRecurringDeal = true;
      this.showDealTitle = true;
      this.showDealDesc = true;
      this.showDealImage = true;
      this.navbar.progress = false;
      this.navbar.editDeal = true;
      this.navbar.editMode = true;
      this.editMode = true;

      let id = this.route.snapshot.paramMap.get('id');

      this.loading = true;
      this.changeDetector.detectChanges();
      this.progressBar.mode = 'query';
      
      this.dealService.getDealByID(parseInt(id))
        .then(data=>{
          this.currentDeal = data;
          this.loading = false;
          console.log(data)
          this.setCurrentDealData();
          console.log(this.form)
        })
      
    }else{
      this.navbar.progress = true;
      this.navbar.editMode = true;
    }
  }

  onFileSelected(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
      reader.onload = (event: any) =>{
        this.dealImages.push(event.target.result)
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onDealTypeChange(dealTypeValue){
    if(this.editMode) return;

    if(dealTypeValue !== ''){
      this.showDiscountType = true;
      if(this.navbar.step == 1){
        this.navbar.goToNextStep();
      }
    }else{
      this.showDiscountType = false;
      if(this.navbar.step == 2){
        this.navbar.goToPreviousStep();
      }
      
    }
  }

  onDiscountTypeChange(discountTypeValue){
    if(this.editMode) return;

    if(discountTypeValue !== ''){
      this.showDealLocation= true;
      if(this.navbar.step == 2){
        this.navbar.goToNextStep();
      }
      if(discountTypeValue === 'Dollars Off'){
        this.dollaOff = true;
      }else{
        this.dollaOff = false;
      }
    }else{
      this.showDealLocation = false;
      this.dollaOff = false;
      if(this.navbar.step == 3){
        this.navbar.goToPreviousStep();
      }
    }
  }

  onDealLocationChange(dealLocationValue){
    if(this.editMode) return;

    if(dealLocationValue !== ''){
      this.showDealAmount = true;
      this.navbar.goToNextStep();
    }else{
      this.showDealAmount = false;
      this.navbar.goToPreviousStep();
    }
  }

  onDealAmountChange(dollarsOffValue){
    if(this.editMode) return;

    if(dollarsOffValue !== ''){
      if(this.navbar.step == 4){
        this.showLimitedTimeDeal = true;
        this.navbar.goToNextStep();
      }
    }else{
      if(this.navbar.step == 5){
        this.showLimitedTimeDeal = false;
        this.navbar.goToPreviousStep();
      }
    }
  }

  onLimitedDealTimeChange(chip){
    this.limitedTimeDealChips.forEach(c =>{
      c.selected = false;
    })

    this.limitedTimeDealChips.forEach(c =>{
      if(chip.name === c.name){
        c.selected = true;
      }
    })

    if(chip.selected && chip.name === "Yes"){
      this.showDealStartEndDate = true;
      this.showDealEndDate = true;
      if(this.navbar.step == 5 && !this.editMode){
        this.navbar.goToNextStep();
      }
    }

    if(chip.selected && chip.name === "No"){
      this.showDealStartEndDate = true;
      this.showDealEndDate = false;
      if(this.navbar.step == 5 && !this.editMode){
        this.navbar.goToNextStep();
      }
    }
  }

  onDealStartDateChange(startDate){
    if(this.editMode) return;

    if(startDate !== '' && startDate != null){
      
      if(this.navbar.step == 6){
        this.showRecurringDeal = true;
        this.navbar.goToNextStep();
      }
    }else if(startDate === ''){
      if(this.navbar.step == 7){
        this.showRecurringDeal = false;
        this.navbar.goToPreviousStep();
      }
    }
  }

  onRecurringDealChange(chip){
    this.recDealsChips.forEach(c =>{
      c.selected = false;
    })

    this.recDealsChips.forEach(c =>{
      if(chip.name === c.name){
        c.selected = true;
      }
    })

    if(chip.selected && chip.name === "Yes"){
      this.showRecurringPeriod = true;
      this.showDealTitle = false;
      if(this.navbar.step == 8 && !this.editMode){
        this.navbar.goToPreviousStep();
      }
    }

    if(chip.selected && chip.name === "No"){
      this.showRecurringPeriod = false;
      this.showDealTitle = true;
      if(this.navbar.step == 7 && !this.editMode){
        this.navbar.goToNextStep();
      }
    }
  }

  displaySelectDays(periodValue){
    if(this.editMode) return;

    this.showSelectDays = (periodValue === 'Weekly') ? true : false;
    if(this.navbar.step == 7){
      this.showDealTitle = true;
      this.navbar.goToNextStep();
    }
  }

  onDealTitleChange(dealTitleValue){
    if(this.editMode) return;

    if(dealTitleValue !== ''){
      if(this.navbar.step == 8){
        this.showDealDesc = true;
        this.navbar.goToNextStep();
      }
    }else{
      if(this.navbar.step == 9){
        this.showDealDesc = false;
        this.navbar.goToPreviousStep();
      }
    }
  }

  onDealDescChange(dealDescValue){
    if(this.editMode) return;

    if(dealDescValue !== ''){
      if(this.navbar.step == 9){
        this.showDealImage = true;
        this.navbar.goToNextStep();
      }
    }else{
      if(this.navbar.step == 10){
        this.showDealImage = false;
        this.navbar.goToPreviousStep();
      }
    }
  }

  removeDealImage(img, file){
    this.dealImages.splice(this.dealImages.indexOf(img), 1);
    file.value = '';
  }

  delete(){
    let confirm = true;

    const dialogRef = this.dialog.open(DealDialogComponent, {
      width: '250px',
      data:{ confirm: confirm }
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.loading = true;
        this.changeDetector.detectChanges();
        this.progressBar.mode = 'indeterminate';
    
        this.dealService.deleteDeal(
          this.currentDeal.locationID,
          this.currentDeal.locationDealID
        ).then(()=>{
          this.loading = false;
          this.router.navigate(['/dashboard']);
        })
      }
    })
  }

  cancel(){
    this.router.navigate(['/dashboard']);
  }

  save(){
    this.loading = true;
    this.changeDetector.detectChanges();
    this.progressBar.mode = 'indeterminate';
    let fv = this.form.value;

    if(!this.editMode){
      this.dealService.addNewDeal(
        this.encodeType(fv.type),
        this.encodeDiscount(fv.discount),
        fv.title, 
        fv.desc,
        fv.valueOff, 
        this.dealImages[0], 
        this.formatDate(fv.startDate),
        this.formatDate(fv.endDate), 
        (fv.recurringPeriod) ? true : false, 
        (fv.recurringPeriod) ? 2 : 0, 
        this.formatTime(fv.startTime),
        this.formatTime(fv.endTime)
      ).then(()=>{
          this.loading = false;
          this.router.navigate(['/dashboard']);
        })
    }else{
      this.dealService.updateDeal(
        this.currentDeal.locationDealID,
        this.currentDeal.locationID,
        this.encodeType(fv.type),
        this.encodeDiscount(fv.discount),
        fv.title,
        fv.desc,
        fv.valueOff, 
        this.dealImages[0], 
        this.formatDate(fv.startDate),
        this.formatDate(fv.endDate), 
        (fv.recurringPeriod) ? true : false, 
        (fv.recurringPeriod) ? 2 : 0, 
        this.formatTime(fv.startTime),
        this.formatTime(fv.endTime)
      ).then(()=>{
        this.loading = false;
        this.router.navigate(['/dashboard']);
      })
    }
    
  }

  private encodeType(type:string):number{
    switch(type){
      case 'Regular':
        return 1;
      case 'Happy Hour':
        return 2;
      case 'Exclusive':
        return 3;
    }
  }

  private encodeDiscount(discount:string):number{
    switch(discount){
      case 'Dollars Off':
        return 1;
      case 'Percentage Off':
        return 2;
      case 'Free Item':
        return 3;
    }
  }

  private formatDate(date) {
    if(date === '') return '2000-01-01';

    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  private formatTime(time){
    if(time === '') return '00:00:00';

    let hour = time.hour;
    let minute = time.minute;

    if(hour.length < 2) hour = '0' + hour;
    if(minute.length < 2) minute = '0' + minute;
    
    return hour + ':' + minute;
  }

  private setCurrentDealData(){
    this.form.patchValue({
      type: this.decodeType(this.currentDeal.dealTypeID),
      discount: this.decodeDiscount(this.currentDeal.discountTypeID),
      location: '27 Market Street',
      valueOff: this.currentDeal.valueOff,
      startDate: this.decodeDate(this.currentDeal.startDate),
      endDate: this.decodeDate(this.currentDeal.endDate),
      startTime: this.decodeTime(this.currentDeal.startTime),
      endTime: this.decodeTime(this.currentDeal.endTime),
      recurringPeriod: 'Weekly',
      recurringDays: this.fb.group({
        Mon: false,
        Tu: false,
        Wed: false,
        Th: false,
        Fri: false,
        Sat: false,
        Sun: false,
      }),
      title: this.currentDeal.name,
      desc: this.currentDeal.description
    })

    // If deal has an end date, then set corresponding chip to Yes
    if(this.currentDeal.endDate != '2000-01-01'){
      this.limitedTimeDealChips.forEach(chip=>{
        if(chip.name === 'Yes'){
          chip.selected = true;
        }
      })
      this.showDealEndDate = true;
    }else{
      this.limitedTimeDealChips.forEach(chip=>{
        if(chip.name === 'No'){
          chip.selected = true;
        }
      })
      this.showDealEndDate = false;
    }

    // If the deal is recurring
    if(this.currentDeal.recurring){
      this.recDealsChips.forEach(chip=>{
        if(chip.name === 'Yes'){
          chip.selected = true;
        }
      })
      this.showRecurringPeriod = true;
      this.showSelectDays = true;
    }else{
      this.recDealsChips.forEach(chip=>{
        if(chip.name === 'No'){
          chip.selected = true;
        }
      })
      this.showRecurringPeriod = false;
    this.showSelectDays = false;
    }
  }

  private decodeType(id:number):string{
    switch(id){
      case 1:
        return 'Regular';
      case 2:
        return 'Happy Hour';
      case 3:
        return 'Exclusive';
    }
  }

  private decodeDiscount(id:number):string{
    switch(id){
      case 1:
        this.dollaOff = true;
        return 'Dollars Off';
      case 2:
        this.dollaOff = false;
        return 'Percentage Off';
      case 3:
        return 'Free Item';
    }
  }

  private decodeDate(date:string){
    if(typeof date === 'undefined') return '';
    
    return new Date(
      parseInt(date.split('-')[0]),
      parseInt(date.split('-')[1]),
      parseInt(date.split('-')[2])
    );
  }

  private decodeTime(time:string){
    if(typeof time === 'undefined') return '';

    let hours = parseInt(time.split(':')[0]);
    let minutes = parseInt(time.split(':')[1]);
    let seconds = parseInt(time.split(':')[2]);

    return { hour: hours, minute: minutes, second: seconds };
  }

}
