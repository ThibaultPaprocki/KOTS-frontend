import { Component, Input, NgModule, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  @Input()
  index: number;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  redirectChallenge() {
    this.route.navigate(["event", "challenge"]);
  }

  redirectTournament() {
    this.route.navigate(["event", "tournament"]);
  }

  redirectEvent() {
    this.route.navigate(["event"]);
  }
}
