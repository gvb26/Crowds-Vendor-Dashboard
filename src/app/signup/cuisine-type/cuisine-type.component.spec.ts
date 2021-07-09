import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineTypeComponent } from './cuisine-type.component';

describe('CuisineTypeComponent', () => {
  let component: CuisineTypeComponent;
  let fixture: ComponentFixture<CuisineTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisineTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
