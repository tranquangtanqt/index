import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvJpaH2ConnectionComponent } from './jv-jpa-h2-connection.component';

describe('JvJpaH2ConnectionComponent', () => {
  let component: JvJpaH2ConnectionComponent;
  let fixture: ComponentFixture<JvJpaH2ConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvJpaH2ConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvJpaH2ConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
