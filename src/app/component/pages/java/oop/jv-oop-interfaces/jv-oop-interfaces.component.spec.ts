import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopInterfacesComponent } from './jv-oop-interfaces.component';

describe('JvOopInterfacesComponent', () => {
  let component: JvOopInterfacesComponent;
  let fixture: ComponentFixture<JvOopInterfacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopInterfacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
