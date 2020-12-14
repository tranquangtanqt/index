import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeHotkeyVsComponent } from './ide-hotkey-vs.component';

describe('IdeHotkeyVsComponent', () => {
  let component: IdeHotkeyVsComponent;
  let fixture: ComponentFixture<IdeHotkeyVsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeHotkeyVsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeHotkeyVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
