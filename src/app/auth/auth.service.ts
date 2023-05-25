import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from '../../environments/environment'

const { defaultUser, hasuraKey } = environment

@Injectable({ providedIn: 'root' })
export class AuthService {
    _token = new BehaviorSubject<string | null>(localStorage.getItem('token'));

    constructor(private router: Router) {}
    
    login(data: { email: string, password: string }) {
        return new Observable(sub => {
            if(data.email === defaultUser.email && data.password === defaultUser.password) {
                localStorage.setItem('token', hasuraKey);
                this._token.next(hasuraKey);
                sub.next(hasuraKey)
            } else {
                throw new Error('Not valid email or password. Try [admin@akvelon.com | admin]')
            }
        }).pipe(tap(() => this.router.navigate(['/'])))
    }
    
    logout() {
        return new Observable(sub => {
            localStorage.clear();
            this._token.next(null);
            sub.next(null)
        }).pipe(tap(() => this.router.navigate(['/auth'])))
    }
}