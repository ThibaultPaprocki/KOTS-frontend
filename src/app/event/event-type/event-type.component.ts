import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { EventService } from "../../shared/service/event.service";
import { Event } from "../../shared/model/event.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateEventModalComponent } from "./../create-event-modal.component";
import { User } from "../../shared/model/user.model";
import { AuthService } from "../../shared/service/auth.service";
import { RegisterEventModalComponent } from "./../register-event-modal.component";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-event-type",
  templateUrl: "./event-type.component.html",
  styleUrls: ["./event-type.component.css"],
})
export class EventTypeComponent implements OnDestroy {
  typeEvent: string;
  events: Event[];
  currentUser: User;
  displayEvent: boolean = true;
  eventsSubscription: Subscription;
  state: string;

  constructor(
    private eventService: EventService,
    private modalService: NgbModal,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.currentUser = this.authService.currentUserValue;

    this.typeEvent = this.route.snapshot.paramMap.get("type");

    if (this.typeEvent === "tournament") {
      this.eventsSubscription = this.eventService.challengesChange$.subscribe(
        () => {
          this.loadTournamentData();
        }
      );
    } else if (this.typeEvent === "challenge") {
      this.eventsSubscription = this.eventService.tournamentsChange$.subscribe(
        () => {
          this.loadChallengeData();
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
      this.eventsSubscription = null;
    }
  }

  open() {
    const modalRef = this.modalService.open(CreateEventModalComponent);
    (modalRef.componentInstance as CreateEventModalComponent).init(
      this.typeEvent
    );
  }

  sendLink(idEvent: number) {
    const modalRef = this.modalService.open(RegisterEventModalComponent);
    (modalRef.componentInstance as RegisterEventModalComponent).init(
      this.currentUser.id,
      idEvent,
      this.typeEvent
    );
  }

  // checkParticipationStateChallenge(idTournament: number) {
  //   const request: ParticipateEventRequest = {
  //     idEvent: idTournament,
  //     idUser: this.currentUser.id,
  //   };
  // }

  showEvent() {
    this.displayEvent = !this.displayEvent;
  }

  loadTournamentData() {
    this.eventService.getTournaments().subscribe((tournaments) => {
      this.events = tournaments;
    });
  }

  loadChallengeData() {
    this.eventService.getChallenges().subscribe((challenges) => {
      this.events = challenges;
    });
  }
}
