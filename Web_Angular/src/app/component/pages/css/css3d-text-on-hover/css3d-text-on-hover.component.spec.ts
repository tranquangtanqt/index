import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Css3dTextOnHoverComponent } from './css3d-text-on-hover.component';

describe('Css3dTextOnHoverComponent', () => {
  let component: Css3dTextOnHoverComponent;
  let fixture: ComponentFixture<Css3dTextOnHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css3dTextOnHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Css3dTextOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
