import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  Signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';
import { LayoutService } from './services/layout.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { DashboardService } from '../../features/dashboard/services/dashboard.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidenavComponent,
    MainContentComponent,
    MatTooltipModule,
    NgClass,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  layoutService = inject(LayoutService);
  isMenuOpened: boolean =
    JSON.parse(sessionStorage.getItem('menuStatus')!) ?? true;
  isMenuOpenedSig = this.layoutService.menuOpened;
  @ViewChild('container', { static: true })
  container!: ElementRef<HTMLDivElement>;
  isMobileToggled: boolean = false;

  ngOnInit() {
    this.onToggleMobile();
  }
  @HostListener('window:resize', ['$event'])
  onToggleMobile() {
    this.isMobileToggled = this.container.nativeElement.offsetWidth < 550;
    if (this.isMobileToggled) {
      this.isMenuOpenedSig.set(false);
    } else {
      this.isMenuOpenedSig.set(
        JSON.parse(sessionStorage.getItem('menuStatus')!),
      );
    }
  }

  onToggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
    this.isMenuOpenedSig.set(this.isMenuOpened);
    sessionStorage.setItem('menuStatus', JSON.stringify(this.isMenuOpened));
  }
}
