import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserRequest } from "./register.model";
import { User } from "./user.model";
import { BehaviorSubject, Observable } from "rxjs";
import { map, mergeAll } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
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
    return this.httpClient.post("http://localhost:8080/register", request);
    // ToDo
    // login automatique souhaitable juste après le register
  }

  login(request: UserRequest) {
    return this.httpClient
      .post<void>("http://localhost:8080/login", request)
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
    return this.httpClient.get<User>("http://localhost:8080/get/user");
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
