import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./shared/model/user.model";
import { AuthService } from "./shared/service/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Kots-project";
  currentUser: User;

  constructor() {}
}
