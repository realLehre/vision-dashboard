import { Component } from '@angular/core';
import { TracksComponent } from './tracks/tracks.component';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [TracksComponent],
  templateUrl: './records.component.html',
  styleUrl: './records.component.scss',
})
export class RecordsComponent {}
