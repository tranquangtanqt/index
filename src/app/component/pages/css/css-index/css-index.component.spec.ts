import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssIndexComponent } from './css-index.component';

describe('CssIndexComponent', () => {
  let component: CssIndexComponent;
  let fixture: ComponentFixture<CssIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
