import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendetherComponent } from './sendether.component';

describe('SendetherComponent', () => {
  let component: SendetherComponent;
  let fixture: ComponentFixture<SendetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
