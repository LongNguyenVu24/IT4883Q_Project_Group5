import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModalContentComponent } from './dialog-modal-content.component';

describe('DialogModalContentComponent', () => {
  let component: DialogModalContentComponent;
  let fixture: ComponentFixture<DialogModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
