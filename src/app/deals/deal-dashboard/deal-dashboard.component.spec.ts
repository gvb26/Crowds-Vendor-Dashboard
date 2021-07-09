import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDashboardComponent } from './deal-dashboard.component';

describe('DealDashboardComponent', () => {
  let component: DealDashboardComponent;
  let fixture: ComponentFixture<DealDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
