import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprSelectDataHibernateH2NewComponent } from './spr-select-data-hibernate-h2-new.component';

describe('SprSelectDataHibernateH2NewComponent', () => {
  let component: SprSelectDataHibernateH2NewComponent;
  let fixture: ComponentFixture<SprSelectDataHibernateH2NewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprSelectDataHibernateH2NewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprSelectDataHibernateH2NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
