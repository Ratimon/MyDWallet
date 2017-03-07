import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawFormComponent } from './withdraw-form.component';

describe('WithdrawFormComponent', () => {
  let component: WithdrawFormComponent;
  let fixture: ComponentFixture<WithdrawFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
