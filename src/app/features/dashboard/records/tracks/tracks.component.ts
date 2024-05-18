import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TracksModule } from './tracks.module';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [DecimalPipe, TracksModule],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss',
})
export class TracksComponent {
  progress: number = 70;
}
