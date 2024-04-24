import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IrelandSportsPage } from './ireland-sports.page';

describe('IrelandSportsPage', () => {
  let component: IrelandSportsPage;
  let fixture: ComponentFixture<IrelandSportsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IrelandSportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
