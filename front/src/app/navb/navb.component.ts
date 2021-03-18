import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navb',
  templateUrl: './navb.component.html',
  styleUrls: ['./navb.component.css'],
})
export class NavbComponent implements OnInit {
  constructor(
    private app: AppService,
    private http: HttpClient,
    private router: Router
  ) {
    //   this.app.authenticate(undefined, undefined);
  }
  // logout() {
  //   this.http
  //     .post('logout', {})
  //     .pipe(
  //       finalize(() => {
  //         this.app.authenticated = false;
  //         this.router.navigateByUrl('/login');
  //       })
  //     )
  //     .subscribe();
  // }

  // authenticated() {
  //   return this.app.authenticated;
  // }

  ngOnInit(): void {}
}
