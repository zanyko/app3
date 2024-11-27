import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileModPage } from './profile-mod.page';

describe('ProfileModPage', () => {
  let component: ProfileModPage;
  let fixture: ComponentFixture<ProfileModPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileModPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
