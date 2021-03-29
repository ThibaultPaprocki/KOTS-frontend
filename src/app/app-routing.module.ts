import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { ProfilComponent } from "./profil/profil.component";
import { EventComponent } from "./event/event.component";
import { AuthGuard } from "./auth.gard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "event", component: EventComponent, canActivate: [AuthGuard] },
  { path: "profil", component: ProfilComponent, canActivate: [AuthGuard] },
  { path: "404", component: FourOhFourComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
