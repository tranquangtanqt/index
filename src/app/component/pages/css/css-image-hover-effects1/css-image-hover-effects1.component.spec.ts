import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssImageHoverEffects1Component } from './css-image-hover-effects1.component';

describe('CssImageHoverEffects1Component', () => {
  let component: CssImageHoverEffects1Component;
  let fixture: ComponentFixture<CssImageHoverEffects1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssImageHoverEffects1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssImageHoverEffects1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
