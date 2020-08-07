import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtIndexComponent } from './pt-index.component';

describe('PtIndexComponent', () => {
  let component: PtIndexComponent;
  let fixture: ComponentFixture<PtIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
