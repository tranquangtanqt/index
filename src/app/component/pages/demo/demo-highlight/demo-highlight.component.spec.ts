import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHighlightComponent } from './demo-highlight.component';

describe('DemoHighlightComponent', () => {
  let component: DemoHighlightComponent;
  let fixture: ComponentFixture<DemoHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
