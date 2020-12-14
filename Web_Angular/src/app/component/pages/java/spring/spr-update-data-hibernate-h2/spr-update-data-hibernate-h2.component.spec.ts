import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprUpdateDataHibernateH2Component } from './spr-update-data-hibernate-h2.component';

describe('SprUpdateDataHibernateH2Component', () => {
  let component: SprUpdateDataHibernateH2Component;
  let fixture: ComponentFixture<SprUpdateDataHibernateH2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprUpdateDataHibernateH2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprUpdateDataHibernateH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
