import { Component } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-quick-info',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './quick-info.component.html',
  styleUrl: './quick-info.component.scss',
})
export class QuickInfoComponent {}
