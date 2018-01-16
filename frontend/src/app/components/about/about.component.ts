import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showPbar: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doneReading(){
    this.showPbar = false;
  }

}
