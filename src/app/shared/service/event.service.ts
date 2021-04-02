import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Event } from "../model/event.model";
import { environment } from "../../../environments/environment";
import { EventRequest } from "../model/event.request";
import { ParticipateEventRequest } from "../model/participate-event.request";

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  createTournament(request: EventRequest) {
    return this.httpClient.post(environment.url + "tournament/create", request);
  }

  createChallenge(request: EventRequest) {
    return this.httpClient.post(environment.url + "challenge/create", request);
  }

  getTournaments() {
    return this.httpClient.get<Event[]>(environment.url + "tournament/get");
  }

  getChallenges() {
    return this.httpClient.get<Event[]>(environment.url + "challenge/get");
  }

  registerTournament(request: ParticipateEventRequest) {
    return this.httpClient.put(
      environment.url + "tournament/register",
      request
    );
  }

  registerChallenge(request: ParticipateEventRequest) {
    return this.httpClient.put(environment.url + "challenge/register", request);
  }
}
