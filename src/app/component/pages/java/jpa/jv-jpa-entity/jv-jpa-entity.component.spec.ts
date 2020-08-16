import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvJpaEntityComponent } from './jv-jpa-entity.component';

describe('JvJpaEntityComponent', () => {
  let component: JvJpaEntityComponent;
  let fixture: ComponentFixture<JvJpaEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvJpaEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvJpaEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
