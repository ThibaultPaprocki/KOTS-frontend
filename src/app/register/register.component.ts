import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../shared/service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-inscription",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      mail: new FormControl("", [Validators.email]),
    });
  }

  ngOnInit(): void {}

  registerUser(): void {
    this.userService.register(this.registerForm.value).subscribe(
      () => {
        this.router.navigate(["login"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
