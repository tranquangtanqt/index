import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpIndexComponent } from './jp-index.component';

describe('JpIndexComponent', () => {
  let component: JpIndexComponent;
  let fixture: ComponentFixture<JpIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
