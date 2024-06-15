import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTablesComponent } from './dash-tables.component';

describe('DashTablesComponent', () => {
  let component: DashTablesComponent;
  let fixture: ComponentFixture<DashTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
