import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequest } from './register.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  authenticated = false;

  register(request: UserRequest) {
    return this.httpClient.post('http://localhost:8080/register', request);
  }

  login(request: UserRequest) {
    return this.httpClient.post('http://localhost:8080/login', request);
  }

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(
      credentials
        ? {
            authorization:
              'Basic ' +
              btoa(credentials.username + ':' + credentials.password),
          }
        : {}
    );
    this.httpClient.get('user', { headers: headers }).subscribe((response) => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }
}
