import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvBasicConvertComponent } from './jv-basic-convert.component';

describe('JvBasicConvertComponent', () => {
  let component: JvBasicConvertComponent;
  let fixture: ComponentFixture<JvBasicConvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvBasicConvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvBasicConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
