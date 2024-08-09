import {
  AfterViewChecked,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { LayoutService } from '../services/layout.service';
import { slideInAnimation } from '../../../route-animations';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  animations: [slideInAnimation],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements AfterViewChecked {
  contexts = inject(ChildrenOutletContexts);
  layoutService = inject(LayoutService);
  @ViewChild('header', { static: false }) header!: ElementRef;

  ngAfterViewChecked() {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
