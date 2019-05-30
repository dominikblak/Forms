import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate, CanActivateChild {

constructor(private authService: AuthService, private router: Router) {}

canActivate(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean {
  if (this.authService.user) {
    return true;
  }
  this.router.navigate(['/login', {name: route.component['name']}]);
  return false;
}
  canActivateChild(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}




