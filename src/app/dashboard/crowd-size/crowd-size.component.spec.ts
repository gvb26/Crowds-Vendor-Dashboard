import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdSizeComponent } from './crowd-size.component';

describe('CrowdSizeComponent', () => {
  let component: CrowdSizeComponent;
  let fixture: ComponentFixture<CrowdSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
