import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemojapanComponent } from './demojapan.component';

describe('DemojapanComponent', () => {
  let component: DemojapanComponent;
  let fixture: ComponentFixture<DemojapanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemojapanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemojapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
