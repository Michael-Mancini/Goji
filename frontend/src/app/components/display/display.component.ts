import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  items:Item[] = [];
  currentIndex: Number;
  cc: String;
  indeterminate: Boolean = true;

  constructor(
    public dialog: MatDialog,
    private data: DataService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.data.getItems().subscribe(items => {
      this.items = items;
    });
    console.log(this.items);
  }

  openDialog(i): void {
    this.currentIndex = i;
    let dialogRef = this.dialog.open(DialogOverview, {
      width: '300px',
      data: { cc: this.cc }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cc = result;
    });
  }

  toggleProgress(){
    this.indeterminate = !this.indeterminate;
  }

}

@Component({
  selector: 'dialog-overview',
  template:
  `
    <h2 mat-dialog-title>Enter your credit card information below.</h2>
    <div mat-dialog-content>
      <p>*Your account will be charged a $2.99 service fee</p>
      <mat-form-field style="width: 100%">
        <input matInput [(ngModel)]="data.cc" maxlength=16 required>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.cc" cdkFocusInitial>Pay</button>
      <mat-icon style="margin-left: 32px;margin-top: 5px;">account_balance</mat-icon>
    </div>
  `
})
export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}