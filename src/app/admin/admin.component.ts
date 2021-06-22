import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AdminComponent {
  constructor(private route: Router) {}

  redirectSpeedrun() {
    this.route.navigate(["control-speedrun"]);
  }
}
