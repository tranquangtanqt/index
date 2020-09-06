import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArrayComponent } from './js-array.component';

describe('JsArrayComponent', () => {
  let component: JsArrayComponent;
  let fixture: ComponentFixture<JsArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
