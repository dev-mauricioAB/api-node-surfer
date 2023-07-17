import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard {
  constructor(
    public authService: AuthService,
    public router: Router,
    private utils: UtilsService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {

    if (this.authService.isAuthenticated() !== true) {
      this.utils.openSnackBar({
        message: 'You must be logged in to access this page',
        action: 'OK',
        config: {
          verticalPosition: 'top'
        }
      })
      this.router.navigate(['login']);
    }

    return true;
  }
}
