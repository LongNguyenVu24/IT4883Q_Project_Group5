import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuptasksComponent } from './popuptasks.component';

describe('PopuptasksComponent', () => {
  let component: PopuptasksComponent;
  let fixture: ComponentFixture<PopuptasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopuptasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopuptasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
