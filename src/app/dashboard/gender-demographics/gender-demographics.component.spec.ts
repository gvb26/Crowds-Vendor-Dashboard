import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderDemographicsComponent } from './gender-demographics.component';

describe('GenderDemographicsComponent', () => {
  let component: GenderDemographicsComponent;
  let fixture: ComponentFixture<GenderDemographicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderDemographicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
