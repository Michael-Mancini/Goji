import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: User[];
  displayDialog: boolean;
  selectedUser: User;
  addUser: boolean;
  user;

  cols: any[] = [
    {field: 'username', header: 'Username'},
    {field: 'age', header: 'Age'},
    {field: 'day', header: 'Day'},
    {field: 'message', header: 'Message'}
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  showDialogToAdd() {
    this.addUser = true;
    this.user = {};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.addUser = false;
    this.user = this.clone(event.data);
    this.displayDialog = true;
  }

  clone(u) {
    let user = {};
    for(let prop in u) {
      if(prop == 'day'){
        user[prop] = '';
      } else {
        user[prop] = u[prop];
      }
    }
    return user;
  }

  save() {
    let users = [...this.users];
    if(this.addUser) {
      //add new
      users.push(this.user);
      this.userService.addUser(this.user).subscribe(response => {
        console.log(response);
        this.getUsers();        
      });;
    } else {
      //update
      this.userService.updateUser(this.user).subscribe(res => {
        this.getUsers();
      });
      users[this.users.indexOf(this.selectedUser)] = this.user;
      
    }
    this.users = users;
    this.user = null;
    this.displayDialog = false;
  }

  delete() {
    this.userService.deleteUser(this.selectedUser._id).subscribe(res => {
      this.getUsers();
    });
    let index = this.users.indexOf(this.selectedUser);
    this.users = this.users.filter((val, i) => i != index);
    this.user = null;
    this.displayDialog = false;
  }

}
