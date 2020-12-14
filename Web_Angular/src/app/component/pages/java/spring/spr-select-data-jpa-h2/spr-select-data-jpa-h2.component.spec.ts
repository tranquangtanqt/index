import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprSelectDataJpaH2Component } from './spr-select-data-jpa-h2.component';

describe('SprSelectDataJpaH2Component', () => {
  let component: SprSelectDataJpaH2Component;
  let fixture: ComponentFixture<SprSelectDataJpaH2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprSelectDataJpaH2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprSelectDataJpaH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
