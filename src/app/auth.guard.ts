import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth/auth.service"

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }
  async canActivate(
    route: ActivatedRouteSnapshot,
    //@ts-ignore
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem("token")) {
      try {
        let token = await this.auth.verifytoken(localStorage.getItem("token"))
        return true
      }
      catch {
        return false
      }

    }

    else {

      this.router.navigateByUrl("/auth/login")
      return false;
    }

  }

}
