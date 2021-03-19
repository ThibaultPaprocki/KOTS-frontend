import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequest } from './register.model';
import { User } from './user.model';

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

  getCurrentUser() {
    return this.httpClient.get<User>('http://localhost:8080/get/user');
  }
}
