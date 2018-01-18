import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  privacyDialog: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  showDialog() {
    this.privacyDialog = true;
  }

  onSubmit(form) {
    let newUser: User = {
      username: form.value.username,
      age: form.value.age,
      day: form.value.day,
      message: form.value.message
    };
    console.log(newUser);

    this.userService.addUser(newUser).subscribe(response => {
      console.log(response);
    });

    form.resetForm();
  }

}
