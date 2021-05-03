import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/service/auth.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NavbComponent } from "../navb/navb.component";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-connexion",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private app: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  login() {
    this.app.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(["profil"]);
      },
      (error) => {
        this.toastr.error("Bad credentials");
        console.log(error);
      }
    );
  }
}
