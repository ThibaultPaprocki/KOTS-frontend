import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { EventService } from "../shared/service/event.service";
import { Event } from "../shared/model/event.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateEventModalComponent } from "../event/create-event-modal.component";
import { User } from "../shared/model/user.model";
import { AuthService } from "../shared/service/auth.service";
import { ParticipateEventRequest } from "../shared/model/participate-event.request";
import { ToastrService } from "ngx-toastr";
import { RegisterEventModalComponent } from "../event/register-event-modal.component";
import { Router } from "@angular/router";
import { UserParticipation } from "../shared/model/user-participation.model";
import { ValidationRun } from "../shared/model/players.validation.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AdminComponent {
  constructor(private route: Router) {}

  redirectSpeedrun() {
    this.route.navigate(["control-speedrun"]);
  }
}
