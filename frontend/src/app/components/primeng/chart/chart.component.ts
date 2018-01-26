import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Doughnut } from '../../../models/Doughnut';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data: any;

  doughnut:Doughnut[];

  constructor(private dService: DataService) {
    
  }

  ngOnInit() {
    if(this.doughnut == undefined){
      // If doughnut db collection doesn't exist create doughnut
      this.dService.addDoughnut().subscribe(i => {
        console.log('inital doughnut added');
      });
    }
      // Retrieve latest data
    this.dService.getDoughnut().subscribe(i => {
      this.doughnut = i;
      this.updateChart();
    });
  }

  updateChart(){
    this.data = {
      labels: ['Grayish', 'Peach', 'Teal', 'Brown!'],
      datasets: [
        {
          data: [this.doughnut[0].grayish, this.doughnut[0].peach, this.doughnut[0].teal, this.doughnut[0].brown],
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
      this.updateChart();
    });
  }

}
