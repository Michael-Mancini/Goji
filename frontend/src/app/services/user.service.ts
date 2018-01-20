import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

const httpHead = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  // Remove http://localhost:3000/ for deployment

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('users');
  }

  addUser(newUser: User): Observable<User>{
    return this.http.post<User>('users', newUser, httpHead);
  }

  updateUser(newUser: User): Observable<User>{
    return this.http.put<User>('users/'+newUser._id, newUser, httpHead);
  }

  deleteUser(id){
    return this.http.delete('users/'+id, httpHead);
  }

}
