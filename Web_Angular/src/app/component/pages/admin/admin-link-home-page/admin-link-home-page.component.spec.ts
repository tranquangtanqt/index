import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLinkHomePageComponent } from './admin-link-home-page.component';

describe('AdminLinkHomePageComponent', () => {
  let component: AdminLinkHomePageComponent;
  let fixture: ComponentFixture<AdminLinkHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLinkHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLinkHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
