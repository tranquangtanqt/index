import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanVocabularyComponent } from './japan-vocabulary.component';

describe('JapanVocabularyComponent', () => {
  let component: JapanVocabularyComponent;
  let fixture: ComponentFixture<JapanVocabularyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapanVocabularyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapanVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
