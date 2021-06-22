import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { ProfilComponent } from "./profil/profil.component";
import { EventComponent } from "./event/event.component";
import { AuthGuard } from "./shared/auth/auth.gard";
import { ControlSpeedrunComponent } from "./admin/control-speedrun/control-speedrun.component";
import { AdminComponent } from "./admin/admin.component";
import { RankingComponent } from "./ranking/ranking.component";
import { SpeedRunToolComponent } from "./speedrunTools/tool.component";
import { ControlSpeedrunEventComponent } from "./admin/control-speedrun/control-speedrun-event/control-speedrun-event.component";
import { EventTypeComponent } from "./event/event-type/event-type.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "tools", component: SpeedRunToolComponent },
  { path: "event", component: EventComponent, canActivate: [AuthGuard] },
  {
    path: "event/:type",
    component: EventTypeComponent,
    canActivate: [AuthGuard],
  },
  { path: "profil", component: ProfilComponent, canActivate: [AuthGuard] },
  { path: "control-speedrun", component: ControlSpeedrunComponent },
  { path: "event/:id/rankings", component: RankingComponent },
  {
    path: "control-speedrun/:type/:id",
    component: ControlSpeedrunEventComponent,
  },

  {
    path: "admin",
    component: AdminComponent,
    children: [
      //{ path: '', pathMatch: "prefix", redirectTo: 'control-speedrun' },
      //{ path: "control-speedrun", component: ControlSpeedrunComponent },
    ],
  },
  { path: "404", component: FourOhFourComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
