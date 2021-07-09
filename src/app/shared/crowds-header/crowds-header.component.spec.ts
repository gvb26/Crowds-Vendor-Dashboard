import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdsHeaderComponent } from './crowds-header.component';

describe('CrowdsHeaderComponent', () => {
  let component: CrowdsHeaderComponent;
  let fixture: ComponentFixture<CrowdsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
