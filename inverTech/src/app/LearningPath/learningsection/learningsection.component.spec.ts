import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningsectionComponent } from './learningsection.component';

describe('LearningsectionComponent', () => {
  let component: LearningsectionComponent;
  let fixture: ComponentFixture<LearningsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
