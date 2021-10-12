import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CurrentUser, User } from './models/user';
import { UserApolloService } from './user/user-apollo/user-apollo.service';
import { UserService } from './user/user/user.service';
import { WalletSubscriptionService } from './user/wallet-subscription/wallet-subscription.service';

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentUser$: Observable<CurrentUser> | undefined;

  constructor(
    private usersService: UserService,
    private walletSubscriptionService: WalletSubscriptionService
  ) {}

  ngOnInit(): void {
    const user$ = this.usersService.getCurrentUser$();
    const walletIpdate$ = this.walletSubscriptionService
      .subscribe()
      .pipe(startWith(null));

    this.currentUser$ = combineLatest([user$, walletIpdate$]).pipe(
      map(([user, walletUpdate]) => {
        if (
          walletUpdate?.data &&
          user?.currentUser?.wallets[walletUpdate?.data.updateWallet.wallet.id]
            ?.id
        ) {
          user.currentUser.wallets[walletUpdate?.data.updateWallet.wallet.id] =
            walletUpdate?.data?.updateWallet?.wallet;
        }
        return user;
      })
    );
  }
  title = 'ancient-gaming';

  public login() {
    this.usersService.login();
  }

  public logout() {
    this.usersService.logout();
  }
}
