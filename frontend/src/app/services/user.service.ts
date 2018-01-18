import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get('http://localhost:3000/users')
    .map(res => res.json());
  }

  addUser(newUser){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/users', newUser, {headers:headers})
    .map(res => res.json());
  }

  updateUser(newUser){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/users/'+newUser._id, newUser, {headers:headers})
    .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete('http://localhost:3000/users/'+id)
    .map(res => res.json());
  }

}
