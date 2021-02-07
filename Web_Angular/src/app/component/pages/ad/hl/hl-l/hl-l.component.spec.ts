import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlLComponent } from './hl-l.component';

describe('HlLComponent', () => {
  let component: HlLComponent;
  let fixture: ComponentFixture<HlLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
