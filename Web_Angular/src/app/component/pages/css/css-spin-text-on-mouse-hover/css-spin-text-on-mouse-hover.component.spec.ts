import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSpinTextOnMouseHoverComponent } from './css-spin-text-on-mouse-hover.component';

describe('CssSpinTextOnMouseHoverComponent', () => {
  let component: CssSpinTextOnMouseHoverComponent;
  let fixture: ComponentFixture<CssSpinTextOnMouseHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssSpinTextOnMouseHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssSpinTextOnMouseHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
