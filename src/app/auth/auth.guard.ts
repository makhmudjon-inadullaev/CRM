import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { map, take } from "rxjs";

export const authRouteGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService._token.pipe(
        take(1),
        map(token => {
            if(token) {
                return router.createUrlTree(['/'])
            }
            return true
        })
    )
}

export const authGuard: CanActivateChildFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService._token.pipe(
        take(1),
        map(token => {
            if(token) {
                return true
            }
            return router.createUrlTree(['/auth'])
        })
    )
}