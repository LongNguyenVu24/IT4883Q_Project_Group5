import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingviewComponent } from './landingview.component';

describe('LandingviewComponent', () => {
  let component: LandingviewComponent;
  let fixture: ComponentFixture<LandingviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
