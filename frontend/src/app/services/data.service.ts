import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/Item';
import { Doughnut } from '../models/Doughnut';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  // Remove http://localhost:3000/ before hosting on node server

  // Material requests
  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>('api/items', httpOptions);
  }

  addItem(newItem: Item): Observable<Item>{
    return this.http.post<Item>('api/item', newItem, httpOptions);
  }

  deleteItem(id){
    return this.http.delete('api/item/'+id, httpOptions);
  }

  // Doughnut Chart/Button requests
  getDoughnut(): Observable<Doughnut[]>{
    return this.http.get<Doughnut[]>('api2/doughnuts');
  }

  addDoughnut(){
    return this.http.post('api2/doughnutPost', httpOptions);
  }

  updateDoughnut(newDoughnut: Doughnut): Observable<Doughnut>{
    return this.http.put<Doughnut>('api2/doughnut/'+newDoughnut._id, newDoughnut, httpOptions);
  }
}
