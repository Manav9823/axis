import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieBannerParentComponent } from './cookie-banner-parent.component';

describe('CookieBannerParentComponent', () => {
  let component: CookieBannerParentComponent;
  let fixture: ComponentFixture<CookieBannerParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieBannerParentComponent]
    });
    fixture = TestBed.createComponent(CookieBannerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
