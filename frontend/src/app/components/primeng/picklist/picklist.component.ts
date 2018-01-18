import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.css']
})
export class PicklistComponent implements OnInit {
  users:User[];
  ptarget: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
