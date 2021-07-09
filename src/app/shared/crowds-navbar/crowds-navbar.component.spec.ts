import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdsNavbarComponent } from './crowds-navbar.component';

describe('NavbarComponent', () => {
  let component: CrowdsNavbarComponent;
  let fixture: ComponentFixture<CrowdsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
