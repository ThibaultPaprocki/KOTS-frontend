import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.registerForm = new FormGroup( {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.minLength(10), Validators.maxLength(200)])
    });
  }

  ngOnInit(): void {
  }

  registerUser(): void{
    this.userService.register(this.registerForm.value).subscribe(
      (returnedId) => {
        this.router.navigate(['user/edit/' + returnedId]).then(r => true);
      },
      (error) => {
        return;
      }
    );
  }
}
