import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvJpaAnotationComponent } from './jv-jpa-anotation.component';

describe('JvJpaAnotationComponent', () => {
  let component: JvJpaAnotationComponent;
  let fixture: ComponentFixture<JvJpaAnotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvJpaAnotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvJpaAnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
