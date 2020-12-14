import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBasicOnOnclickComponent } from './js-basic-on-onclick.component';

describe('JsBasicOnOnclickComponent', () => {
  let component: JsBasicOnOnclickComponent;
  let fixture: ComponentFixture<JsBasicOnOnclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsBasicOnOnclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsBasicOnOnclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
