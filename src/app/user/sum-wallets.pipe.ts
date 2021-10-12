import { Pipe, PipeTransform } from '@angular/core';
import { Wallet } from '../models/user';

@Pipe({
  name: 'sumWallets',
})
export class SumWalletsPipe implements PipeTransform {
  transform(value: Wallet[] | undefined, ...args: unknown[]): number {
    let credits = 0;
    if (value) {
      value.forEach((wallet) => {
        credits += wallet.amount;
      });
    }
    return credits;
  }
}
