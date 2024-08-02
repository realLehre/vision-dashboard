import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, PaymentMethodComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  today: string = '';

  ngOnInit() {
    const hour = new Date().getHours();
    let min = new Date().getMinutes() as any;
    if (min.length < 2) {
      min = '0' + min;
    }
    this.today = `${hour}:${min}`;
    console.log(this.today);
  }
}
