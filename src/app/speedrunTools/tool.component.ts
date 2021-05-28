import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { EventService } from "../shared/service/event.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EventRequest } from "../shared/model/event.request";
import { User } from "../shared/model/user.model";
import { AuthService } from "../shared/service/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-tool",
  templateUrl: "./tool.component.html",
  styleUrls: ["./tool.component.css"],
})
export class SpeedRunToolComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
