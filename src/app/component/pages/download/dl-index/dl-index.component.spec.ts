import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlIndexComponent } from './dl-index.component';

describe('DlIndexComponent', () => {
  let component: DlIndexComponent;
  let fixture: ComponentFixture<DlIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
