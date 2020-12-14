import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssImageOverlayHoverEffectsComponent } from './css-image-overlay-hover-effects.component';

describe('CssImageOverlayHoverEffectsComponent', () => {
  let component: CssImageOverlayHoverEffectsComponent;
  let fixture: ComponentFixture<CssImageOverlayHoverEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssImageOverlayHoverEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssImageOverlayHoverEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
