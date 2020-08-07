import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvOopConstrucstorsComponent } from './jv-oop-construcstors.component';

describe('JvOopConstrucstorsComponent', () => {
  let component: JvOopConstrucstorsComponent;
  let fixture: ComponentFixture<JvOopConstrucstorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvOopConstrucstorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvOopConstrucstorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
