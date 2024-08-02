import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTransactionsStatus]',
  standalone: true,
})
export class TransactionsStatusDirective implements OnInit {
  renderer = inject(Renderer2);
  el = inject(ElementRef);
  @Input('appTransactionsStatus') appTransactionsStatus!: string;
  ngOnInit() {
    this.changeColor();
  }

  changeColor() {
    switch (this.appTransactionsStatus.toLowerCase()) {
      case 'debit':
        {
          this.applyColor('#A0AEC0');
        }
        break;
      case 'credit':
        {
          this.applyColor('#01B574');
        }
        break;
      case 'pending': {
        this.applyColor('#A0AEC0');
      }
    }
  }
  applyColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}

@Directive({
  selector: '[appTransactionsImgStatus]',
  standalone: true,
})
export class TransactionsStatusImgDirective implements OnInit {
  renderer = inject(Renderer2);
  el = inject(ElementRef);
  @Input('appTransactionsImgStatus') appTransactionsImgStatus!: string;
  ngOnInit() {
    this.changeImgSrc();
  }

  changeImgSrc() {
    switch (this.appTransactionsImgStatus.toLowerCase()) {
      case 'debit':
        {
          this.applyImg('assets/images/billing/debit.png');
        }
        break;
      case 'credit':
        {
          this.applyImg('assets/images/billing/credit.png');
        }
        break;
      case 'pending': {
        this.applyImg('assets/images/billing/pending.png');
      }
    }
  }
  applyImg(src: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'src', src);
  }
}

@Directive({
  selector: '[appTransactionsIconStatus]',
  standalone: true,
})
export class TransactionsStatusIconDirective implements OnInit {
  renderer = inject(Renderer2);
  el = inject(ElementRef);
  @Input('appTransactionsIconStatus') appTransactionsIconStatus!: string;

  constructor() {}

  ngOnInit() {
    this.changeBorderColor();
  }

  changeBorderColor() {
    switch (this.appTransactionsIconStatus.toLowerCase()) {
      case 'debit':
        {
          this.applyColor('#E31A1A');
        }
        break;
      case 'credit':
        {
          this.applyColor('#01B574');
        }
        break;
      case 'pending': {
        this.applyColor('#A0AEC0');
      }
    }
  }

  applyColor(color: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border',
      '1px solid' + color,
    );
  }
}
