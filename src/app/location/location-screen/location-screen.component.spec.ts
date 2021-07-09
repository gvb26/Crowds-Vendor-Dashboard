import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationScreenComponent } from './location-screen.component';

describe('LocationScreenComponent', () => {
  let component: LocationScreenComponent;
  let fixture: ComponentFixture<LocationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
