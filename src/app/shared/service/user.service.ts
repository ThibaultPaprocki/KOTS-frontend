import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ProfilRequest } from "../model/profil.request";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  updateUser(request: ProfilRequest) {
    return this.httpClient.put(environment.url + "update", request);
  }

  updatePassword(request: ProfilRequest) {
    return this.httpClient.put<boolean>(environment.url + "password", request);
  }

  getUsername(idUser: number) {
    return this.httpClient.get<string>(`${environment.url}username${idUser}`);
  }
}
