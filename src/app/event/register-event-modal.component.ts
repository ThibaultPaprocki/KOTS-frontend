import { Component } from "@angular/core";
import { EventService } from "../shared/service/event.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EventRequest } from "../shared/model/event.request";
import { User } from "../shared/model/user.model";
import { AuthService } from "../shared/service/auth.service";
import { ToastrService } from "ngx-toastr";
import { Player } from "../shared/model/players.model";

@Component({
  selector: "app-create-event-modal",
  templateUrl: "./register-event-modal.component.html",
  styleUrls: ["./register-event-modal.component.scss"],
})
export class RegisterEventModalComponent {
  event: string;
  eventForm: FormGroup;
  currentUser: User;
  idUser: number;
  idEvent: number;

  constructor(
    private eventService: EventService,
    private activeModal: NgbActiveModal,
    private toastr: ToastrService
  ) {}

  init(idUser: number, idEvent: number, event: string) {
    this.idUser = idUser;
    this.idEvent = idEvent;
    this.eventForm = new FormGroup({
      urlVideo: new FormControl(undefined, Validators.required),
      timer: new FormControl(undefined, Validators.required),
    });
    this.event = event;
  }

  sendLink() {
    const playerRequest: Player = {
      idUser: this.idUser,
      idEvent: this.idEvent,
      timer: this.eventForm.get("timer").value,
      url_youtube: this.eventForm.get("urlVideo").value,
    };

    // if (this.event === "tournament")
    //   this.eventService.createPlayerTournament(playerRequest).subscribe(() => {
    //     this.toastr.success(
    //       "Participation send. Wait a validation from the admin."
    //     );
    //     this.dismiss();
    //   });
    // else
    this.eventService.createPlayerChallenge(playerRequest).subscribe(() => {
      this.toastr.success(
        "Participation send. Wait a validation from the admin."
      );
      this.dismiss();
    });
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
