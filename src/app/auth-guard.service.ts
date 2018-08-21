import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthGuardService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService: AuthGuardService, private router: Router){

    }

    canActivate(activatedRoute: ActivatedRouteSnapshot,
                state: RouterStateSnapshot){
        return this.authService.isAuthenticated().then(
            (isAuthenticated: boolean)=>{
                if(isAuthenticated){
                    return true;
                }
                else{
                    this.router.navigate([''])
                }
            }
        )
    }

    canActivateChild(activatedRoute: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot){
            return this.canActivate(activatedRoute, state);
    }
}