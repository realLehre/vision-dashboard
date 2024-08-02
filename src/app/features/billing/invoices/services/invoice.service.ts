import { Injectable } from '@angular/core';

export interface Invoice {
  date: string;
  id: string;
  amount: string;
}
@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  invoice: Invoice[] = [
    { date: 'March, 01, 2020', id: '#MS-415646', amount: '180' },
    { date: 'February, 10, 2021', id: '#RV-126749', amount: '250' },
    { date: 'April, 05, 2020', id: '#FB-212562', amount: '560' },
    { date: 'June, 25, 2019', id: '#QW-103578', amount: '120' },
    { date: 'March, 01, 2019', id: '#AR-803481', amount: '220' },
  ];
  constructor() {}
}
