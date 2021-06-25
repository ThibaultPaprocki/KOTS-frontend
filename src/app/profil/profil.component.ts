import { Component, OnDestroy } from "@angular/core";
import { AuthService } from "../shared/service/auth.service";
import { User } from "../shared/model/user.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../shared/service/user.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"],
})
export class ProfilComponent implements OnDestroy {
  currentUser: User;
  updateProfil: FormGroup;
  updPassword: FormGroup;
  //password: string;
  show: boolean = false;
  updating: boolean = false;
  //loginForm: FormGroup;
  userSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.userSubscription = this.auth.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.loadData();
    });

    this.updPassword = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
    this.updateProfil = new FormGroup({
      mail: new FormControl("", [Validators.email]),
      description: new FormControl("", [Validators.required]),
      twitch: new FormControl("", [Validators.required]),
      youtube: new FormControl("", [Validators.required]),
    });
    this.updating = false;
  }

  loadData(): void {
    this.updateProfil.setValue({
      mail: this.currentUser.mail,
      description: this.currentUser.description,
      twitch: this.currentUser.twitch,
      youtube: this.currentUser.youtube,
    });
    this.updPassword.setValue({
      username: this.currentUser.username,
      password: "",
    });
  }

  updateUser() {
    this.userService.updateUser(this.updateProfil.value).subscribe(
      () => {
        this.userSubscription = this.auth.getCurrentUser().subscribe((user) => {
          this.currentUser = user;
          this.loadData();
        });
        this.toastr.success("Informations bien modifiées");
      },
      (error) => {
        this.toastr.error("Updating Profil Error");
        console.log(error);
      }
    );
  }

  updatePassword() {
    this.userService.updatePassword(this.updPassword.value).subscribe(
      (data) => {
        if (data) {
          this.auth.logout();
          this.router.navigate(["login"]);
        } else {
          this.toastr.error("Password already exists");
        }
      },
      (error) => {
        this.toastr.error("Updating Password error");
        console.log(error);
      }
    );
  }

  updatingPassword() {
    this.updating = !this.updating;
    // document.getElementById(this.editPassword).disabled = this.updating;
  }

  showPassword() {
    this.show = !this.show;
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
      this.userSubscription = null;
    }
  }
}
