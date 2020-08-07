import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPrismComponent } from './lib-prism.component';

describe('LibPrismComponent', () => {
  let component: LibPrismComponent;
  let fixture: ComponentFixture<LibPrismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibPrismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibPrismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
