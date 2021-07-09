import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxCapComponent } from './max-cap.component';

describe('MaxCapComponent', () => {
  let component: MaxCapComponent;
  let fixture: ComponentFixture<MaxCapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxCapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
