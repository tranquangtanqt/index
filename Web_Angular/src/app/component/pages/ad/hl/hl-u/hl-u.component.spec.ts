import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlUComponent } from './hl-u.component';

describe('HlUComponent', () => {
  let component: HlUComponent;
  let fixture: ComponentFixture<HlUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
