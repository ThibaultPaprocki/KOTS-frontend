import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserRequest } from "../model/user.request";
import { User } from "../model/user.model";
import { BehaviorSubject, Observable } from "rxjs";
import { map, mergeAll } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  register(request: UserRequest) {
    return this.httpClient.post(environment.url + "register", request);
  }

  login(request: UserRequest) {
    return this.httpClient
      .post<void>(environment.url + "login", request)
      .pipe(
        map(() => {
          return this.getCurrentUser();
        }),
        mergeAll()
      )
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  getCurrentUser() {
    return this.httpClient.get<User>(environment.url + "user");
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
