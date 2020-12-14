import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopOverloadingOverridingComponent } from './jv-oop-overloading-overriding.component';

describe('JvOopOverloadingOverridingComponent', () => {
  let component: JvOopOverloadingOverridingComponent;
  let fixture: ComponentFixture<JvOopOverloadingOverridingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopOverloadingOverridingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopOverloadingOverridingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
