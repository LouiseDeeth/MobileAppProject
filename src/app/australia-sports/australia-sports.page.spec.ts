import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AustraliaSportsPage } from './australia-sports.page';

describe('AustraliaSportsPage', () => {
  let component: AustraliaSportsPage;
  let fixture: ComponentFixture<AustraliaSportsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaSportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
