import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCrowdSizeComponent } from './current-crowd-size.component';

describe('CurrentCrowdSizeComponent', () => {
  let component: CurrentCrowdSizeComponent;
  let fixture: ComponentFixture<CurrentCrowdSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCrowdSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCrowdSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
