import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprSelectDataHibernateH2Component } from './spr-select-data-hibernate-h2.component';

describe('SprSelectDataHibernateH2Component', () => {
  let component: SprSelectDataHibernateH2Component;
  let fixture: ComponentFixture<SprSelectDataHibernateH2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprSelectDataHibernateH2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprSelectDataHibernateH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
