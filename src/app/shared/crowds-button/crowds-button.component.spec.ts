import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdsButtonComponent } from './crowds-button.component';

describe('CrowdsButtonComponent', () => {
  let component: CrowdsButtonComponent;
  let fixture: ComponentFixture<CrowdsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
