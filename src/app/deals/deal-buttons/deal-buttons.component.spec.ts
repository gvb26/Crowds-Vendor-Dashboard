import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealButtonsComponent } from './deal-buttons.component';

describe('DealButtonsComponent', () => {
  let component: DealButtonsComponent;
  let fixture: ComponentFixture<DealButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
