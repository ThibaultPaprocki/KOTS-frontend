import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { EventService } from "../shared/service/event.service";
import { Event } from "../shared/model/event.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateEventModalComponent } from "./create-event-modal.component";
import { User } from "../shared/model/user.model";
import { AuthService } from "../shared/service/auth.service";
import { ParticipateEventRequest } from "../shared/model/participate-event.request";
import { RegisterEventModalComponent } from "./register-event-modal.component";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class EventComponent implements OnInit, OnDestroy {
  tournaments: Event[];
  challenges: Event[];
  currentUser: User;
  displayTournament: boolean = true;
  displayChallenge: boolean = true;
  challengesSubscription: Subscription;
  tournamentsSubscription: Subscription;
  state: string;

  constructor(
    private eventService: EventService,
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser = this.authService.currentUserValue;
    this.challengesSubscription = this.eventService.challengesChange$.subscribe(
      () => {
        this.loadData();
      }
    );
    this.tournamentsSubscription = this.eventService.tournamentsChange$.subscribe(
      () => {
        this.loadData();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.challengesSubscription) {
      this.challengesSubscription.unsubscribe();
      this.challengesSubscription = null;
    } else if (this.tournamentsSubscription) {
      this.tournamentsSubscription.unsubscribe();
      this.tournamentsSubscription = null;
    }
  }

  ngOnInit(): void {}

  open(event: string) {
    const modalRef = this.modalService.open(CreateEventModalComponent);
    (modalRef.componentInstance as CreateEventModalComponent).init(event);
  }

  sendLink(idEvent: number, event: string) {
    const modalRef = this.modalService.open(RegisterEventModalComponent);
    (modalRef.componentInstance as RegisterEventModalComponent).init(
      this.currentUser.id,
      idEvent,
      event
    );
  }

  checkParticipationStateTournament(idTournament: number) {
    const request: ParticipateEventRequest = {
      idEvent: idTournament,
      idUser: this.currentUser.id,
    };
  }

  checkParticipationStateChallenge(idTournament: number) {
    const request: ParticipateEventRequest = {
      idEvent: idTournament,
      idUser: this.currentUser.id,
    };
  }

  participateChallenge(idChallenge: number) {
    const request: ParticipateEventRequest = {
      idEvent: idChallenge,
      idUser: this.currentUser.id,
    };
  }

  showTournaments() {
    this.displayTournament = !this.displayTournament;
  }

  showChallenges() {
    this.displayChallenge = !this.displayChallenge;
  }

  redirectAdmin(event: Event) {
    //TODO
    this.router.navigate(["event", event.id, "admin"]);
  }

  redirectRankings(event: Event) {
    this.router.navigate(["event", event.id, "rankings"]);
    // => navigate to angular page "/event/123/rankings"   ... as defined in app.router.ts
    // for Route   { path: 'event/:id/rankings', component: RankingComponent },
  }

  loadData() {
    this.eventService.getTournaments().subscribe((tournaments) => {
      this.tournaments = tournaments;
    });
    this.eventService.getChallenges().subscribe((challenges) => {
      this.challenges = challenges;
    });
  }
}
