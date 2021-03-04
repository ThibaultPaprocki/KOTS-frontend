import { Component, OnInit } from '@angular/core';
import { UserRequest } from './register.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  user: UserRequest;

  constructor(
    private userService: UserService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.userService.getUser(params.id).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('user not found');
        }
      );
    });
  }
}
