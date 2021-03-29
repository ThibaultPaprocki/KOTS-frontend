import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/service/user.service";
import { User } from "../shared/model/user.model";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"],
})
export class ProfilComponent implements OnInit {
  currentUser: User;
  displayUser: boolean = false;

  constructor(private app: UserService) {
    this.currentUser = this.app.currentUserValue;
  }

  ngOnInit(): void {
    // this.user = new User();
    // this.app.getCurrentUser().subscribe(
    //   (user) => {
    //     this.user = user;
    //   },
    //   (error) => console.log(error)
    // );
  }

  display() {
    this.displayUser = !this.displayUser;
  }
}
