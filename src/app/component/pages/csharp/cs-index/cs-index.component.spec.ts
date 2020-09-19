import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsIndexComponent } from './cs-index.component';

describe('CsIndexComponent', () => {
  let component: CsIndexComponent;
  let fixture: ComponentFixture<CsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
