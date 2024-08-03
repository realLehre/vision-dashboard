import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePlatformSettingsComponent } from './profile-platform-settings.component';

describe('ProfilePlatformSettingsComponent', () => {
  let component: ProfilePlatformSettingsComponent;
  let fixture: ComponentFixture<ProfilePlatformSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePlatformSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilePlatformSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
