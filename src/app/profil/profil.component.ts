import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  user: User;
  constructor(private app: UserService) {}

  ngOnInit(): void {
    this.user = new User();

    this.app.getCurrentUser().subscribe(
      (user) => {
        this.user = user;
      },
      (error) => console.log(error)
    );
  }
}
