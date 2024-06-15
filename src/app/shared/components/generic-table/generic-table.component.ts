import { Component, ContentChild, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent {
  @ContentChild('heading') headingTemplate!: TemplateRef<any>;
}
