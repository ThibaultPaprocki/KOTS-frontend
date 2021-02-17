import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbComponent } from './navb.component';

describe('NavbComponent', () => {
  let component: NavbComponent;
  let fixture: ComponentFixture<NavbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
