import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainuserinfoComponent } from './mainuserinfo.component';

describe('MainuserinfoComponent', () => {
  let component: MainuserinfoComponent;
  let fixture: ComponentFixture<MainuserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainuserinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainuserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
