import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHungComponent } from './login-hung.component';

describe('LoginHungComponent', () => {
  let component: LoginHungComponent;
  let fixture: ComponentFixture<LoginHungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginHungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
