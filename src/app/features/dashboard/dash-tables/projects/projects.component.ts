import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GenericTableComponent } from '../../../../shared/components/generic-table/generic-table.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { CurrencyPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Project, ProjectsService } from './services/projects.service';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutService } from '../../../../core/layout/services/layout.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    GenericTableComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    NgTemplateOutlet,
    CurrencyPipe,
    NgClass,
    MatMenuModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projectsService = inject(ProjectsService);
  layoutService = inject(LayoutService);
  displayedColumns: string[] = ['companies', 'members', 'budget', 'completion'];
  projects!: MatTableDataSource<Project>;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.projects = new MatTableDataSource<Project>(
      this.projectsService.projects,
    );
    if (this.layoutService.currentRoute() == 'tables') {
      this.displayedColumns.push('menu');
    } else {
      this.displayedColumns = this.displayedColumns.filter(
        (col) => col != 'menu',
      );
    }
  }

  ngAfterViewInit() {
    this.projects.sort = this.sort;
  }
}
