import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopMethodEqualsComponent } from './jv-oop-method-equals.component';

describe('JvOopMethodEqualsComponent', () => {
  let component: JvOopMethodEqualsComponent;
  let fixture: ComponentFixture<JvOopMethodEqualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopMethodEqualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopMethodEqualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
