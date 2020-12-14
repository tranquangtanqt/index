import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsAngularNgrxComponent } from './js-angular-ngrx.component';

describe('JsAngularNgrxComponent', () => {
  let component: JsAngularNgrxComponent;
  let fixture: ComponentFixture<JsAngularNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsAngularNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsAngularNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
