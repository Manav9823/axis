import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisViewComponentComponent } from './axis-view-component.component';

describe('AxisViewComponentComponent', () => {
  let component: AxisViewComponentComponent;
  let fixture: ComponentFixture<AxisViewComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxisViewComponentComponent]
    });
    fixture = TestBed.createComponent(AxisViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
