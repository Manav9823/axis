import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisParentComponentComponent } from './axis-parent-component.component';

describe('AxisParentComponentComponent', () => {
  let component: AxisParentComponentComponent;
  let fixture: ComponentFixture<AxisParentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxisParentComponentComponent]
    });
    fixture = TestBed.createComponent(AxisParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
