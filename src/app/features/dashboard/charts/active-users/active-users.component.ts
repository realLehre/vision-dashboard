import { Component } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [DecimalPipe, CurrencyPipe],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.scss',
})
export class ActiveUsersComponent {}
