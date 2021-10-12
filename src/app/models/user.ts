export interface CurrentUser {
  currentUser: User | null;
}

export interface User {
  id: string;
  name: string;
  wallets: Wallet[];
}

export interface Wallet {
  id: string;
  amount: number;
  currency: string;
}
