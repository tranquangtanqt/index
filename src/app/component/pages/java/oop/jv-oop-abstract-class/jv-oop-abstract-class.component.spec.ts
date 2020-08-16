import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopAbstractClassComponent } from './jv-oop-abstract-class.component';

describe('JvOopAbstractClassComponent', () => {
  let component: JvOopAbstractClassComponent;
  let fixture: ComponentFixture<JvOopAbstractClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopAbstractClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopAbstractClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
