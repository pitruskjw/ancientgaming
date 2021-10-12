import { Injectable } from '@angular/core';
import { UserApolloService } from '../user-apollo/user-apollo.service';
import { map } from 'rxjs/operators';
import { CurrentUser, User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userApolloService: UserApolloService) {}

  public getCurrentUser$(): Observable<CurrentUser> {
    return this.userApolloService
      .watch()
      .valueChanges.pipe(map((x: ApolloQueryResult<CurrentUser>) => x?.data));
  }

  public login() {
    window.location.href = `https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200`;
  }
  public logout() {
    window.location.href = `https://api-staging.csgoroll.com/logout?redirectUri=http://localhost:4200`;
  }
}
