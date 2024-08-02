import { Injectable } from '@angular/core';

export interface Transactions {
  title: string;
  date: string;
  price: number;
  type: string;
}
@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: Transactions[] = [
    {
      title: 'Netflix',
      date: '27 March 2020, at 12:30 PM',
      price: 2500,
      type: 'debit',
    },
    {
      title: 'Apple',
      date: '27 March 2020, at 12:30 PM',
      price: 2500,
      type: 'credit',
    },
    {
      title: 'Stripe',
      date: '26 March 2020, at 13:45 PM',
      price: 800,
      type: 'credit',
    },
    {
      title: 'HubSpot',
      date: '26 March 2020, at 14:30 PM',
      price: 1700,
      type: 'credit',
    },
    {
      title: 'Webflow',
      date: '28 March 2020, at 12:30 PM',
      price: 0,
      type: 'pending',
    },
    {
      title: 'Microsoft',
      date: '27 March 2020, at 12:30 PM',
      price: 987,
      type: 'debit',
    },
  ];
  constructor() {}
}
