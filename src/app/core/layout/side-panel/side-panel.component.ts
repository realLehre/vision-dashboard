import {
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ColorPickerModule } from 'primeng/colorpicker';

import { LayoutService } from '../services/layout.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [ColorPickerModule, ReactiveFormsModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent implements OnInit {
  layoutService = inject(LayoutService);
  formGroup: FormGroup = new FormGroup<any>({
    color: new FormControl(null),
  });

  ngOnInit() {
    this.formGroup.get('color')?.setValue(this.layoutService.primaryColor());
    this.formGroup.valueChanges.subscribe((val) => {
      this.layoutService.primaryColor.set(val.color);
      localStorage.setItem('primaryColor', val.color);
    });
  }

  onCloseSidePanel() {
    this.layoutService.sidePanelOpened.set(false);
  }
}
