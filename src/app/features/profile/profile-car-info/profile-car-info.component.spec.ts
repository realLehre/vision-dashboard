import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCarInfoComponent } from './profile-car-info.component';

describe('ProfileCarInfoComponent', () => {
  let component: ProfileCarInfoComponent;
  let fixture: ComponentFixture<ProfileCarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCarInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
