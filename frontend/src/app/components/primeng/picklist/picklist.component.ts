import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/User';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.css']
})
export class PicklistComponent implements OnInit {
  users;
  ptarget: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('ngOnInit called');
    this.getItems();
  }

  getItems(){
    console.log('getItems called');
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
      console.log(users);
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        //client side error
        console.log('An error occured: ', err.error.message);
      } else {
        //backend returned unsuccessful response code
        console.log(err.error);
      }
    });
  }

}
