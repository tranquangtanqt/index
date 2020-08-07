import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopAnonymousClassComponent } from './jv-oop-anonymous-class.component';

describe('JvOopAnonymousClassComponent', () => {
  let component: JvOopAnonymousClassComponent;
  let fixture: ComponentFixture<JvOopAnonymousClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopAnonymousClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopAnonymousClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
