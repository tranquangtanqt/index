import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvIndexComponent } from './jv-index.component';

describe('JvIndexComponent', () => {
  let component: JvIndexComponent;
  let fixture: ComponentFixture<JvIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
