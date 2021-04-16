import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserRequest } from "../model/user.request";
import { User } from "../model/user.model";
import { BehaviorSubject, Observable } from "rxjs";
import { map, mergeAll } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { ProfilRequest } from "../model/profil.request";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  updateUser(request: ProfilRequest) {
    return this.httpClient.put(environment.url + "profil/update", request);
  }
}
