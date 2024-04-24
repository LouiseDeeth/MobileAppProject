import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AustraliaPage } from './australia.page';

describe('AustraliaPage', () => {
  let component: AustraliaPage;
  let fixture: ComponentFixture<AustraliaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
