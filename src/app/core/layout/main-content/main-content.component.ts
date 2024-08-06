import {
  AfterViewChecked,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements AfterViewChecked {
  layoutService = inject(LayoutService);
  @ViewChild('header', { static: false }) header!: ElementRef;

  ngAfterViewChecked() {}
}
