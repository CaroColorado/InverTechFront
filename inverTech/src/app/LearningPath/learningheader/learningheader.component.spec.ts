import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningheaderComponent } from './learningheader.component';

describe('LearningheaderComponent', () => {
  let component: LearningheaderComponent;
  let fixture: ComponentFixture<LearningheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
