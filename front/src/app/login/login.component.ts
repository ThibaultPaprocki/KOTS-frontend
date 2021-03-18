import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  credentials = { username: '', password: '' };

  constructor(
    private app: AppService,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // login() {
  //   this.app.authenticate(this.credentials, () => {
  //     this.router.navigateByUrl('/');
  //   });
  //   return false;
  // }

  login() {
    this.credentials = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.app.login(this.credentials);
  }
}
