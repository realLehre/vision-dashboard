import { Component } from '@angular/core';
import { GenericTableComponent } from '../../../../shared/components/generic-table/generic-table.component';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GenericTableComponent, TableModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
