import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSkewTextOnHoverComponent } from './css-skew-text-on-hover.component';

describe('CssSkewTextOnHoverComponent', () => {
  let component: CssSkewTextOnHoverComponent;
  let fixture: ComponentFixture<CssSkewTextOnHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssSkewTextOnHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssSkewTextOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
