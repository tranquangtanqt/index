import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlIComponent } from './hl-i.component';

describe('HlIComponent', () => {
  let component: HlIComponent;
  let fixture: ComponentFixture<HlIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
