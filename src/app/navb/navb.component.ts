import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppComponent } from "../app.component";
import { User } from "../user.model";
import { UserService } from "../user.service";

@Component({
  selector: "app-navb",
  templateUrl: "./navb.component.html",
  styleUrls: ["./navb.component.css"],
})
export class NavbComponent {
  currentUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = this.userService.currentUserValue;
    console.log("currentUser: " + this.currentUser);
    this.userService.currentUser.subscribe((x) => (this.currentUser = x));
    console.log("currentUser: " + this.currentUser);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["login"]);
  }
}
