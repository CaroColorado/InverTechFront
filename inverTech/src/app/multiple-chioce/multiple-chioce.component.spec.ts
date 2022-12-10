import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChioceComponent } from './multiple-chioce.component';

describe('MultipleChioceComponent', () => {
  let component: MultipleChioceComponent;
  let fixture: ComponentFixture<MultipleChioceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChioceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleChioceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
