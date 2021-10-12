import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { CurrentUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserApolloService extends Query<CurrentUser> {
  document = gql`
    {
      currentUser {
        id
        name
        wallets {
          id
          amount
          currency
        }
      }
    }
  `;
}
