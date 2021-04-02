import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/service/auth.service";
import { User } from "../shared/model/user.model";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"],
})
export class ProfilComponent implements OnInit {
  currentUser: User;

  constructor(private auth: AuthService) {
    this.currentUser = this.auth.currentUserValue;
  }

  ngOnInit(): void {}
}
