import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/service/auth.service";
import { User } from "../shared/model/user.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"],
})
export class ProfilComponent implements OnInit {
  currentUser: User;
  updateProfil: FormGroup;

  constructor(private auth: AuthService) {
    this.currentUser = this.auth.currentUserValue;
    this.updateProfil = new FormGroup({
      password: new FormControl("", [Validators.required]),
      mail: new FormControl("", [Validators.email]),
      description: new FormControl("", [Validators.required]),
      twitchLink: new FormControl("", [Validators.required]),
      youtubeLink: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  updateUser() {}
}
