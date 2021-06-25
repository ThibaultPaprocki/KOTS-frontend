import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../shared/model/user.model";
import { AuthService, RoleEntity } from "../shared/service/auth.service";

@Component({
  selector: "app-navb",
  templateUrl: "./navb.component.html",
  styleUrls: ["./navb.component.css"],
})
export class NavbComponent implements OnInit {
  currentUser: User;
  currentRole: RoleEntity[];
  roleAdmin: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUser = this.authService.currentUserValue;
    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
    this.currentRole = this.authService.currentRoleValue;
    this.authService.currentRole.subscribe((x) => {
      this.currentRole = x;
    });
  }

  ngOnInit() {}

  isAdmin() {
    if (
      this.currentRole.find((roleEntity) => roleEntity.authority === "ADMIN") !=
      undefined
    ) {
      return true;
    }
    return false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
