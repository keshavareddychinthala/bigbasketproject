import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsoftheweekComponent } from './dealsoftheweek.component';

describe('DealsoftheweekComponent', () => {
  let component: DealsoftheweekComponent;
  let fixture: ComponentFixture<DealsoftheweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsoftheweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsoftheweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
