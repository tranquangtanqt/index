import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopInheritanceComponent } from './jv-oop-inheritance.component';

describe('JvOopInheritanceComponent', () => {
  let component: JvOopInheritanceComponent;
  let fixture: ComponentFixture<JvOopInheritanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopInheritanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
