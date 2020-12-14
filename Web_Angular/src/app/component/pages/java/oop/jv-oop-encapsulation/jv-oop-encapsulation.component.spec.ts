import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopEncapsulationComponent } from './jv-oop-encapsulation.component';

describe('JvOopEncapsulationComponent', () => {
  let component: JvOopEncapsulationComponent;
  let fixture: ComponentFixture<JvOopEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
