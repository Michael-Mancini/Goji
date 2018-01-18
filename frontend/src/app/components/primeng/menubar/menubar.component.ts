import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  menuItems: MenuItem[];
  dropOptions = [{name:"PrimeNG"}, {name:"Material Design"}];

  constructor(public router: Router) { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Info',
        icon: 'fa-info'
      },
      {
        label: 'Form',
        icon: 'fa-file-o'
      },
      {
        label: 'Chart',
        icon: 'fa-pie-chart'
      },
      {
        label: 'Data Display',
        items: [
          {label: 'Picklist', icon: 'fa-arrows-h'},
          {label: 'Tree', icon: 'fa-tree'},
          {label: 'Turbo/DataTable', icon: 'fa-table'},
          {label: 'TreeTable', icon: 'fa-object-ungroup'}
        ]
      }
    ];
  }

  dropChange(e){
    if(e.value.name == "Material Design"){
      this.router.navigate(['/material']);
    }
  }

}
