import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/service/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserRequest } from "../shared/model/user.request";

@Component({
  selector: "app-inscription",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  fieldTextType: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registerForm = new FormGroup(
      {
        username: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
        confirmedPassword: new FormControl("", [Validators.required]),
        mail: new FormControl("", [Validators.email, Validators.required]),
      },
      { validators: this.checkPasswords }
    );
  }

  ngOnInit(): void {}

  registerUser(): void {
    const request: UserRequest = {
      username: this.registerForm.get("username").value,
      password: this.registerForm.get("password").value,
      mail: this.registerForm.get("mail").value,
    };
    this.authService.register(request).subscribe(
      () => {
        this.authService.login(request).subscribe(
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

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const password = group.get("password").value;
    const confirmedPassword = group.get("confirmedPassword").value;

    return password === confirmedPassword ? null : { notSame: true };
  }
}
