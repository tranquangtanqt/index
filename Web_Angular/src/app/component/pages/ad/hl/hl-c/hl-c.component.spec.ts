import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlCComponent } from './hl-c.component';

describe('HlCComponent', () => {
  let component: HlCComponent;
  let fixture: ComponentFixture<HlCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
