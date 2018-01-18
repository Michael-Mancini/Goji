import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Doughnut } from '../../../models/Doughnut';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  grayishCount: number;
  peachCount: number;
  tealCount: number;
  brownCount: number;

  data: any;

  doughnut:Doughnut[];

  constructor(private dService: DataService) {
    
  }

  ngOnInit() {
    //retrieve color counts from db
    this.oneTime();
    
    
  }

  oneTime(){
    /*this.dService.addDoughnut().subscribe(item => {
      console.log(item);
    });*/

    this.dService.getDoughnut().subscribe(i => {
      this.doughnut = i;
      console.log(i);
      console.log(this.doughnut[0].grayish);
      this.grayishCount = this.doughnut[0].grayish;
    this.peachCount = this.doughnut[0].peach;
    this.tealCount = this.doughnut[0].teal;
    this.brownCount = this.doughnut[0].brown;
    this.updateChart();
    });
    
  }

  updateChart(){
    this.data = {
      labels: ['Grayish', 'Peach', 'Teal', 'Brown!'],
      datasets: [
        {
          data: [this.grayishCount, this.peachCount, this.tealCount, this.brownCount],
          backgroundColor: ['#4c5454', '#FF715B', '#1EA896', '#523F38'],
          hoverBackgroundColor: ['#9DA1A1', '#FFB1A5', '#84CFC5', '#A09692']
        }
      ]
    };
  }

  donutClick(e){
    switch(e.target.innerText){
      case 'Grayish': {
        this.doughnut[0].grayish++;
        break;
      }
      case 'Peach': {
        this.doughnut[0].peach++;
        break;
      }
      case 'Teal': {
        this.doughnut[0].teal++;
        break;
      }
      case 'Brown!': {
        this.doughnut[0].brown++;
        break;
      }
      default: {
        console.log('ERROR: Invalid button color');
      }
    }
    this.dService.updateDoughnut(this.doughnut[0]).subscribe(res => {
      this.oneTime();
    });
  }

}
