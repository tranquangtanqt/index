import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Css3dCardFlipAnimationComponent } from './css3d-card-flip-animation.component';

describe('Css3dCardFlipAnimationComponent', () => {
  let component: Css3dCardFlipAnimationComponent;
  let fixture: ComponentFixture<Css3dCardFlipAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css3dCardFlipAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Css3dCardFlipAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
