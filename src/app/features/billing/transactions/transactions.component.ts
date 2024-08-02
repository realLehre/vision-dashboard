import { Component, inject } from '@angular/core';
import {
  Transactions,
  TransactionsService,
} from './services/transactions.service';
import {
  TransactionsStatusDirective,
  TransactionsStatusIconDirective,
  TransactionsStatusImgDirective,
} from './directives/transactions-status.directive';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    TransactionsStatusIconDirective,
    TransactionsStatusImgDirective,
    CurrencyPipe,
    TransactionsStatusDirective,
    DecimalPipe,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  transactionsService = inject(TransactionsService);
  transactions: Transactions[] = this.transactionsService.transactions;
}
