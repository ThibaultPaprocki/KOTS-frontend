import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppComponent } from "../app.component";
import { User } from "../shared/model/user.model";
import { AuthService } from "../shared/service/auth.service";

@Component({
  selector: "app-navb",
  templateUrl: "./navb.component.html",
  styleUrls: ["./navb.component.css"],
})
export class NavbComponent {
  currentUser: User;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUser = this.authService.currentUserValue;
    console.log("currentUser: " + this.currentUser);
    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
    console.log("currentUser: " + this.currentUser);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
