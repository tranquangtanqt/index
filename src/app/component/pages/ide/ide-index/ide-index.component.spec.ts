import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeIndexComponent } from './ide-index.component';

describe('IdeIndexComponent', () => {
  let component: IdeIndexComponent;
  let fixture: ComponentFixture<IdeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
