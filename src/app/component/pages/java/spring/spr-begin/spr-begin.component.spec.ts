import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprBeginComponent } from './spr-begin.component';

describe('SprBeginComponent', () => {
  let component: SprBeginComponent;
  let fixture: ComponentFixture<SprBeginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprBeginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
