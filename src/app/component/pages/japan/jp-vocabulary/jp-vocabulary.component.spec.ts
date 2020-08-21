import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpVocabularyComponent } from './jp-vocabulary.component';

describe('JpVocabularyComponent', () => {
  let component: JpVocabularyComponent;
  let fixture: ComponentFixture<JpVocabularyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpVocabularyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
