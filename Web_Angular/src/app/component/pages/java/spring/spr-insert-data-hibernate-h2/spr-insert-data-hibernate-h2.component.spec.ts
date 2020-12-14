import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprInsertDataHibernateH2Component } from './spr-insert-data-hibernate-h2.component';

describe('SprInsertDataHibernateH2Component', () => {
  let component: SprInsertDataHibernateH2Component;
  let fixture: ComponentFixture<SprInsertDataHibernateH2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprInsertDataHibernateH2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprInsertDataHibernateH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
