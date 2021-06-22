import { Component, OnInit } from "@angular/core";
import { ValidationRun } from "src/app/shared/model/players.validation.model";
import { EventService } from "src/app/shared/service/event.service";
import { UserService } from "src/app/shared/service/user.service";
import { UserRun } from "src/app/shared/model/user-run.model";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-control-speedrun-event",
  templateUrl: "./control-speedrun-event.component.html",
  styleUrls: ["./control-speedrun-event.component.css"],
})
export class ControlSpeedrunEventComponent implements OnInit {
  participants: UserRun[];
  indexClick: number;
  apiLoaded = false;
  idEvent: number;
  typeEvent: string;
  stateEvent: string;

  constructor(
    private userService: UserService,
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
    this.typeEvent = this.route.snapshot.paramMap.get("type");
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idEvent = +params.get("id");
    });
    console.log(this.typeEvent);
    this.getUsersParticipations(this.idEvent);
  }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  getUsersParticipations(idEvent: number) {
    if (this.typeEvent === "tournament") {
      this.eventService
        .getParticipationsTournament(idEvent)
        .subscribe((participations) => {
          this.participants = participations;
        });
    } else if (this.typeEvent === "challenge") {
      this.eventService
        .getParticipationsChallenge(idEvent)
        .subscribe((participations) => {
          this.participants = participations;
        });
    } else console.log("ERROR NO CHALLENGE OR TOURNAMENT PROVIDED");
  }

  validate(idRun: number, validation: string) {
    const validateRun: ValidationRun = {
      idRun: idRun,
      idEvent: this.idEvent, //idEvent a choppé autrement
      state: validation,
    };
    console.log(idRun);
    if (this.typeEvent === "challenge") {
      this.eventService
        .validateParticipationChallenge(validateRun)
        .subscribe(() =>
          this.eventService
            .getStateParticipationChallenge(validateRun)
            .subscribe((state) => (this.stateEvent = state))
        );
    } else if (this.typeEvent === "tournament") {
      this.eventService
        .validateParticipationTournament(validateRun)
        .subscribe();
    }
  }

  selectPlayer(index: number) {
    this.indexClick = index;
  }
}
