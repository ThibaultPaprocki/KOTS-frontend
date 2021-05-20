import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSpeedrunComponent } from './control-speedrun.component';

describe('ControlSpeedrunComponent', () => {
  let component: ControlSpeedrunComponent;
  let fixture: ComponentFixture<ControlSpeedrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSpeedrunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSpeedrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
