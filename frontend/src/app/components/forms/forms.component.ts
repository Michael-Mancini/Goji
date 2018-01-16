import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  color: String = "primary";
  sellInfo: String;
  sellInfoBool: Boolean;
  guacamole = false;
  completion = 0;
  completed = [];
  canAdd: Boolean = true;
  canAddSelect: Boolean = true;
  canAddInfo: Boolean = true;
  canAddDate: Boolean = true;

  constructor(
    public snackBar: MatSnackBar,
    private data: DataService,
  ) { }

  changeColor(){
    if(this.color == "primary"){
      this.color = "warn";
    } else if(this.color == "warn"){
      this.color = "primary";
    }
  }

  openSnackBar(){
    this.snackBar.open("Your order has been placed! (View it in the display section of the Side-Nav)", "OK", {
      duration: 5000
    });
  }

  onSubmit(form){
    if(this.sellInfo === "true"){
      this.sellInfoBool = true;
    } else if(this.sellInfo === "false"){
      this.sellInfoBool = false;
    } else {
      console.log('ERROR: sellInfo not of right type');
    }
    
    let newItem: Item = {
      name: form.value.name,
      type: form.value.type,
      guacamole: this.guacamole,
      sellInfo: this.sellInfoBool,
      datePicker: form.value.date
    };

    this.data.addItem(newItem).subscribe(item => {
      console.log(item);
    });
    
    form.resetForm();
    this.completion = 0;
    this.canAdd = true;
    this.canAddSelect = true;
    this.canAddInfo = true;
    this.canAddDate = true;
    this.completed = [];
    this.openSnackBar();
  }

  completeSection(field){
    //Even though there is only one text input element in the form this function can handle multiple.
    if(field.target.validity.valid){
      for(var i = 0; i < this.completed.length; i++){
        if(this.completed[i] == field.target.name){
          this.canAdd = false;
        }
      }

      if(this.canAdd){
        this.completed.push(field.target.name);
        this.completion += 25;
      }
      this.canAdd = true;
    }
  }

  completeSelect(){
    if(this.canAddSelect){
      this.completion += 25;
      this.canAddSelect = false;
    }
  }

  completeInfo(){
    if(this.canAddInfo){
      this.completion += 25;
      this.canAddInfo = false;
    }
  }

  completeDate(){
    if(this.canAddDate){
      this.completion += 25;
      this.canAddDate = false;
    }
  }

}
