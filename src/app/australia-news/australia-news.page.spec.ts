import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AustraliaNewsPage } from './australia-news.page';

describe('AustraliaNewsPage', () => {
  let component: AustraliaNewsPage;
  let fixture: ComponentFixture<AustraliaNewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
