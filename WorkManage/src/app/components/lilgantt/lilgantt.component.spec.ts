import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilganttComponent } from './lilgantt.component';

describe('LilganttComponent', () => {
  let component: LilganttComponent;
  let fixture: ComponentFixture<LilganttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilganttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LilganttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
