import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IrelandPage } from './ireland.page';

describe('IrelandPage', () => {
  let component: IrelandPage;
  let fixture: ComponentFixture<IrelandPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IrelandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
