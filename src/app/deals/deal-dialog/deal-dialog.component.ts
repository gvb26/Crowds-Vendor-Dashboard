import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-deal-dialog',
  templateUrl: './deal-dialog.component.html',
  styleUrls: ['./deal-dialog.component.scss']
})
export class DealDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close()
  }

}
