import { Component } from "@angular/core";
import { EventService } from "../shared/service/event.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EventRequest } from "../shared/model/event.request";
import { User } from "../shared/model/user.model";
import { AuthService } from "../shared/service/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-event-modal",
  templateUrl: "./register-event-modal.component.html",
  styleUrls: ["./register-event-modal.component.scss"],
})
export class RegisterEventModalComponent {
  type: string;
  eventForm: FormGroup;
  currentUser: User;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private activeModal: NgbActiveModal,
    private toastr: ToastrService
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  init() {}

  dismiss() {
    this.activeModal.dismiss();
  }
}
