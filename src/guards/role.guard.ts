import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

    // Get the user's roles from local storage
    const roles = localStorage.getItem('roles');

    // Check if the user has the 'admin' role
    if (roles?.includes('DEAN')) {
      // Navigate to the 'admin-panel' route
      this.router.navigate(['admin-panel']);
      return true;
    }
    // Check if the user has the 'supervisor' role
    else if (roles?.includes('ADMIN')) {
      // Navigate to the 'supervisor-panel' route
      this.router.navigate(['supervisor-panel']);
      return true;
    }
    // If the user does not have any of the required roles
    else {
      // Navigate to the 'waiting' route
      this.router.navigate(['waiting']);
      return false;
    }
  }
}
