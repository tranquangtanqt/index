import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlSComponent } from './hl-s.component';

describe('HlSComponent', () => {
  let component: HlSComponent;
  let fixture: ComponentFixture<HlSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
