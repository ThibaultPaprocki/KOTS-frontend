import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserRequest } from "../model/user.request";
import { User } from "../model/user.model";
import { BehaviorSubject, Observable } from "rxjs";
import { map, mergeAll } from "rxjs/operators";
import { environment } from "../../../environments/environment";

export interface RoleEntity {
  authority: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private currentRoleSubject: BehaviorSubject<RoleEntity[]>;
  public currentRole: Observable<RoleEntity[]>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentRoleSubject = new BehaviorSubject<RoleEntity[]>(
      JSON.parse(localStorage.getItem("currentRole"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentRole = this.currentRoleSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get currentRoleValue(): RoleEntity[] {
    return this.currentRoleSubject.value;
  }

  register(request: UserRequest) {
    return this.httpClient.post(environment.url + "register", request);
  }

  login(request: UserRequest) {
    return this.httpClient
      .post<void>(environment.url + "login", request)
      .pipe(
        map(() => {
          this.getRole();

          return this.getCurrentUser();
        }),
        mergeAll()
      )
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          //localStorage.setItem("token", "isLoggedIn").subscribe(() => {});
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  getCurrentUser() {
    return this.httpClient.get<User>(environment.url + "user");
  }

  getRole() {
    return this.httpClient
      .get<RoleEntity[]>(environment.url + "roles")
      .subscribe((role) => {
        localStorage.setItem("currentRole", JSON.stringify(role));
        this.currentRoleSubject.next(role);
        return role;
      });
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
    localStorage.removeItem("currentRole");
    this.currentRoleSubject.next(null);
  }
}
