import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocallComponent } from './democall.component';

describe('DemocallComponent', () => {
  let component: DemocallComponent;
  let fixture: ComponentFixture<DemocallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemocallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
