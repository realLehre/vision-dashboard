import { Component } from '@angular/core';
import { GenericTableComponent } from '../../../../shared/components/generic-table/generic-table.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
