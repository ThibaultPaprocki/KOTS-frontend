import { Component, OnInit } from "@angular/core";
import { UserParticipation } from "src/app/shared/model/user-participation.model";
import { ValidationRun } from "src/app/shared/model/players.validation.model";
import { EventService } from "src/app/shared/service/event.service";
import { UserService } from "src/app/shared/service/user.service";
import { User } from "../../shared/model/user.model";
import { UserRun } from "src/app/shared/model/user-run.model";

@Component({
  selector: "app-control-speedrun",
  templateUrl: "./control-speedrun.component.html",
  styleUrls: ["./control-speedrun.component.css"],
})
export class ControlSpeedrunComponent implements OnInit {
  users: UserRun[] = [];
  user: User;
  indexClick: number;
  apiLoaded = false;

  constructor(
    private userService: UserService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.getUsersParticipations(2);
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      this.apiLoaded = !this.apiLoaded;
    }
  }

  getUsersParticipations(idEvent: number) {
    this.eventService
      .getParticipationsChallenge(idEvent)
      .subscribe((participations) => (this.users = participations));
  }

  getUsername(idUser: number): string {
    this.userService.getUsername(idUser).subscribe((name) => {
      console.log("name : " + name);
      return name;
    });
    return undefined;
  }

  validate(idRun: number, validation: string) {
    const validateRun: ValidationRun = {
      idRun: idRun,
      idEvent: 1, //idEvent a choppé autrement
      validation: validation,
    };

    //this.eventService.validateParticipationTournament(validateRun).subscribe();

    this.eventService.validateParticipationChallenge(validateRun).subscribe();
  }

  selectPlayer(index: number) {
    this.indexClick = index;
  }
}
