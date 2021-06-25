import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../service/auth.service";

@Injectable({ providedIn: "root" })
export class AuthRole implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentRole = this.authService.currentRoleValue;
    console.log(currentRole);

    if (
      currentRole.find((roleEntity) => roleEntity.authority === "ADMIN") !=
      undefined
    ) {
      console.log("true");
      return true;
    }

    this.router.navigate(["/home"], { queryParams: { returnUrl: state.url } });
    console.log("false");
    return false;
  }
}
