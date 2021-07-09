import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootTrafficComponent } from './foot-traffic.component';

describe('FootTrafficComponent', () => {
  let component: FootTrafficComponent;
  let fixture: ComponentFixture<FootTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
