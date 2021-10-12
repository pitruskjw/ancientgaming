import { Injectable } from '@angular/core';
import { gql, Subscription } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class WalletSubscriptionService extends Subscription {
  document = gql`
    subscription {
      updateWallet {
        wallet {
          id
          amount
          currency
        }
      }
    }
  `;
}
