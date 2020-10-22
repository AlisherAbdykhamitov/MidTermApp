import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostAliService {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      // tslint:disable-next-line: no-unused-expression
      this.router.navigate['/login'];
      return false;
    }
  }
}
