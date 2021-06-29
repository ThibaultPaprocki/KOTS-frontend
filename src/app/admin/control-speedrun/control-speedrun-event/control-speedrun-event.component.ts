import { Component, OnInit } from "@angular/core";
import {
  Participation,
  ValidationRun,
} from "src/app/shared/model/players.validation.model";
import { EventService, State } from "src/app/shared/service/event.service";
import { UserService } from "src/app/shared/service/user.service";
import { UserRun } from "src/app/shared/model/user-run.model";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { PartialObserver, Subscription } from "rxjs";

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
  stateRun: State;

  stateSubscription: Subscription;

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
    const participation: Participation = {
      idRun: idRun,
      idEvent: this.idEvent,
    };
    console.log(idRun);
    if (this.typeEvent === "challenge") {
      this.eventService
        .validateParticipationChallenge(validateRun)
        .subscribe(() => {
          this.eventService
            .getStateParticipationChallenge(participation)
            .subscribe((currentState) => (this.stateRun = currentState));
        });
    } else if (this.typeEvent === "tournament") {
      this.eventService
        .validateParticipationTournament(validateRun)
        .subscribe();
    }
  }

  selectPlayer(index: number, idRun: number, event: MouseEvent) {
    const participation: Participation = {
      idRun: idRun,
      idEvent: this.idEvent,
    };
    this.indexClick = index;
    this.loadData(participation);
    // this.stateSubscription = this.eventService.stateChange$.subscribe(() => {
    //   this.loadData(participation);
    // });
  }

  loadData(participation: Participation) {
    if (this.typeEvent === "challenge") {
      this.eventService
        .getStateParticipationChallenge(participation)
        .subscribe((state) => {
          this.stateRun = state;
        });
    } else if (this.typeEvent === "tournament") {
      this.eventService
        .getStateParticipationTournament(participation)
        .subscribe((state) => {
          this.stateRun = state;
        });
    }
  }

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
      this.stateSubscription = null;
    }
  }
}
