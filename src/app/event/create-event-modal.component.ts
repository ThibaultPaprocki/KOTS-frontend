import { ChangeDetectorRef, Component } from "@angular/core";
import { EventService } from "../shared/service/event.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EventRequest } from "../shared/model/event.request";
import { User } from "../shared/model/user.model";
import { AuthService } from "../shared/service/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-event-modal",
  templateUrl: "./create-event-modal.component.html",
  styleUrls: ["./create-event-modal.component.css"],
})
export class CreateEventModalComponent {
  type: string;
  eventForm: FormGroup;
  currentUser: User;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private ref: ChangeDetectorRef
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  init(type: string) {
    this.type = type;

    this.eventForm = new FormGroup({
      specificity: new FormControl(undefined, Validators.required),
      description: new FormControl(undefined, Validators.required),
      conditions: new FormControl(undefined, Validators.required),
    });
  }

  createEvent() {
    console.log("CurrentUser id : " + this.currentUser.id);
    const request: EventRequest = {
      specificity: this.eventForm.get("specificity").value,
      description: this.eventForm.get("description").value,
      conditions: this.eventForm.get("conditions").value,
      idUser: this.currentUser.id,
    };

    if (this.type === "tournament") {
      this.eventService.createTournament(request).subscribe(
        () => {
          this.activeModal.dismiss();
          this.ref.detectChanges();
        },
        (error) => {
          this.toastr.error(error);
        }
      );
    } else {
      this.eventService.createChallenge(request).subscribe(
        () => {
          this.activeModal.dismiss();
          this.ref.detectChanges();
        },
        (error) => {
          this.toastr.error(error);
        }
      );
    }
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
