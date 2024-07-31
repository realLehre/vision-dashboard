import {
  Component,
  ElementRef,
  inject,
  OnInit,
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
    const primaryColor = localStorage.getItem('primaryColor');
    if (primaryColor) {
      this.formGroup.get('color')?.setValue(primaryColor);
    }
    this.formGroup.valueChanges.subscribe((val) => {
      this.layoutService.primaryColor.set(val.color);
      localStorage.setItem('primaryColor', val.color);
    });
  }

  onCloseSidePanel() {
    this.layoutService.sidePanelOpened.set(false);
  }
}
