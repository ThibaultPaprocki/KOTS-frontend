import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/service/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-inscription",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registerForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      mail: new FormControl("", [Validators.email]),
    });
  }

  ngOnInit(): void {}

  registerUser(): void {
    this.authService.register(this.registerForm.value).subscribe(
      () => {
        this.authService.login(this.registerForm.value).subscribe(
          () => {
            this.router.navigate(["profil"]);
          },
          (error) => {
            this.toastr.error("Impossible error");
            console.log(error);
          }
        );
      },
      (error) => {
        this.toastr.error("Username already used");
        console.log(error);
      }
    );
  }
}
