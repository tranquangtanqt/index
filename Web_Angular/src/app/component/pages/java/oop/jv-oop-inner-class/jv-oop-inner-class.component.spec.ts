import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopInnerClassComponent } from './jv-oop-inner-class.component';

describe('JvOopInnerClassComponent', () => {
  let component: JvOopInnerClassComponent;
  let fixture: ComponentFixture<JvOopInnerClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopInnerClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopInnerClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
