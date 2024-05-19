import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('header', { static: true }) header!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const isScrolled = window.scrollY > 50;
    if (isScrolled) {
      this.header.nativeElement.classList.add('add_bg');
    } else {
      this.header.nativeElement.classList.remove('add_bg');
    }
  }
}
