import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopGetsetComponent } from './jv-oop-getset.component';

describe('JvOopGetsetComponent', () => {
  let component: JvOopGetsetComponent;
  let fixture: ComponentFixture<JvOopGetsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopGetsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopGetsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
