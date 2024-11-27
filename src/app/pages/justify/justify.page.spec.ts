import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JustifyPage } from './justify.page';

describe('JustifyPage', () => {
  let component: JustifyPage;
  let fixture: ComponentFixture<JustifyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JustifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
