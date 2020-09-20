import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsBasicDelegateComponent } from './cs-basic-delegate.component';

describe('CsBasicDelegateComponent', () => {
  let component: CsBasicDelegateComponent;
  let fixture: ComponentFixture<CsBasicDelegateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsBasicDelegateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsBasicDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
