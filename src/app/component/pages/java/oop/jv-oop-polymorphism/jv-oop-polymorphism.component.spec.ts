import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopPolymorphismComponent } from './jv-oop-polymorphism.component';

describe('JvOopPolymorphismComponent', () => {
  let component: JvOopPolymorphismComponent;
  let fixture: ComponentFixture<JvOopPolymorphismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopPolymorphismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopPolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
