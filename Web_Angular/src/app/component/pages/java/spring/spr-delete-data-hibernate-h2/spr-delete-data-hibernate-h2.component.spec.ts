import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprDeleteDataHibernateH2Component } from './spr-delete-data-hibernate-h2.component';

describe('SprDeleteDataHibernateH2Component', () => {
  let component: SprDeleteDataHibernateH2Component;
  let fixture: ComponentFixture<SprDeleteDataHibernateH2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprDeleteDataHibernateH2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprDeleteDataHibernateH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
