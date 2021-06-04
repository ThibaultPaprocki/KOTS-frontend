import { Component, OnInit } from "@angular/core";
import { UserParticipation } from "src/app/shared/model/user-participation.model";
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
  users: UserParticipation[] = [];
  user: User;
  indexClick: number;

  constructor(
    private userService: UserService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.getPlayers(1);
  }

  getPlayers(idEvent: number) {
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

  validate(idUser: number, idEvent: number, validation: boolean) {
    const validateRun: ValidationRun = {
      idUser: idUser,
      idEvent: idEvent,
      validation: validation,
    };

    // this.eventService.validateTournament(validateRun).subscribe();
    // this.eventService.validateChallenge(validateRun).subscribe();
  }

  selectPlayer(index: number) {
    this.indexClick = index;
  }
}
