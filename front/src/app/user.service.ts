import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from './edituser/user';

interface ReturnedId {
  createdId: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  register(value: object): Observable<string> {
    return this.httpClient.post<ReturnedId>('http://localhost:8000/users', value)
      .pipe(
        map((result) => {
          return result.createdId;
        })
      );
  }

  getUser(id: string): Observable<User>{
    return this.httpClient.get<User>('http://localhost:8000/users/' + id);
  }
}


