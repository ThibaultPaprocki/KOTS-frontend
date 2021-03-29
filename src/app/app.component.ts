import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Kots-project";
  currentUser: User;

  constructor(private userService: UserService) {}
}
