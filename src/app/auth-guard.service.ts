import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private route: Router) {
  }

  canActivate() {
    return this.auth.user$.pipe(map(user => {
      console.log(user);
      if (user) {
        return true;
      }
      this.route.navigate(['/login']);
      return false;
    }));
  }

}
