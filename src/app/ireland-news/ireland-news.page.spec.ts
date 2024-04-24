import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IrelandNewsPage } from './ireland-news.page';

describe('IrelandNewsPage', () => {
  let component: IrelandNewsPage;
  let fixture: ComponentFixture<IrelandNewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IrelandNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
