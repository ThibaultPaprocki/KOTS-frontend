import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { EventService } from "../shared/service/event.service";
import { Event } from "../shared/model/event.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateEventModalComponent } from "./create-event-modal.component";
import { User } from "../shared/model/user.model";
import { AuthService } from "../shared/service/auth.service";
import { ParticipateEventRequest } from "../shared/model/participate-event.request";
import { ToastrService } from "ngx-toastr";
import { RegisterEventModalComponent } from "./register-event-modal";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class EventComponent implements OnInit {
  tournaments: Event[];
  challenges: Event[];
  currentUser: User;
  displayTournament: boolean = true;
  displayChallenge: boolean = true;

  constructor(
    private eventService: EventService,
    private modalService: NgbModal,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit(): void {
    this.eventService.getTournaments().subscribe((tournaments) => {
      this.tournaments = tournaments;
    });
    this.eventService.getChallenges().subscribe((challenges) => {
      this.challenges = challenges;
    });
  }

  open(event: string) {
    const modalRef = this.modalService.open(CreateEventModalComponent);
    (modalRef.componentInstance as CreateEventModalComponent).init(event);
  }

  sendLink() {
    const modalRef = this.modalService.open(RegisterEventModalComponent);
    (modalRef.componentInstance as RegisterEventModalComponent).init();
  }

  participateTournament(idTournament: number) {
    const request: ParticipateEventRequest = {
      idEvent: idTournament,
      idUser: this.currentUser.id,
    };
    this.eventService.registerTournament(request).subscribe(
      () => {
        location.reload();
      },
      (error) => {
        this.toastr.error("Register Event Error");
      }
    );
  }

  participateChallenge(idChallenge: number) {
    const request: ParticipateEventRequest = {
      idEvent: idChallenge,
      idUser: this.currentUser.id,
    };
    this.eventService.registerChallenge(request).subscribe(
      () => {
        location.reload();
      },
      (error) => {
        this.toastr.error("Register Event Error");
      }
    );
  }

  showTournaments() {
    this.displayTournament = !this.displayTournament;
  }

  showChallenges() {
    this.displayChallenge = !this.displayChallenge;
  }
}
