import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderuserinfoComponent } from './headeruserinfo.component';

describe('HeaderuserinfoComponent', () => {
  let component: HeaderuserinfoComponent;
  let fixture: ComponentFixture<HeaderuserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderuserinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderuserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
