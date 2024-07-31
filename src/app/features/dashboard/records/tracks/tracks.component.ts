import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TracksModule } from './tracks.module';
import { LayoutService } from '../../../../core/layout/services/layout.service';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss',
})
export class TracksComponent {
  progress: number = 70;
  layoutService = inject(LayoutService);
}
