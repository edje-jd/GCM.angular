import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientalComponent } from './patiental.component';

describe('PatientalComponent', () => {
  let component: PatientalComponent;
  let fixture: ComponentFixture<PatientalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
