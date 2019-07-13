import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticFComponent } from './exotic-f.component';

describe('ExoticFComponent', () => {
  let component: ExoticFComponent;
  let fixture: ComponentFixture<ExoticFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoticFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
