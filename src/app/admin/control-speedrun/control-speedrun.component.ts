import { Component, OnInit } from "@angular/core";
import { Player } from "src/app/shared/model/players.model";
import { ValidationRun } from "src/app/shared/model/players.validation.model";
import { EventService } from "src/app/shared/service/event.service";
import { UserService } from "src/app/shared/service/user.service";
import { User } from "../../shared/model/user.model";


@Component({
  selector: "app-control-speedrun",
  templateUrl: "./control-speedrun.component.html",
  styleUrls: ["./control-speedrun.component.css"],
})
export class ControlSpeedrunComponent implements OnInit {
  players: Player[];
  user: User;
  indexClick: number;
  apiLoaded = false;

  constructor(
    private userService: UserService,
    private eventService: EventService
  ) {
    this.getPlayers(2);
  }

  ngOnInit(): void {
    this.getPlayers(2);
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  getPlayers(idEvent: number) {
    this.eventService
      .getPlayersChallenge(idEvent)
      .subscribe((playerList) => (this.players = playerList));
  }

  getUsername(idUser: number): string {
    this.userService.getUsername(idUser).subscribe((name) => {
      console.log("name : " + name);
      return name;
    });
    return undefined;
  }

  validate(idUser: number, idEvent: number, validation: boolean) {
    const validateRun: ValidationRun = {
      idUser: idUser,
      idEvent: idEvent,
      validation: validation,
    };

    // this.eventService.validateTournament(validateRun).subscribe();
    this.eventService.validateChallenge(validateRun).subscribe();
  }

  selectPlayer(index: number) {
    this.indexClick = index;
  }
}
