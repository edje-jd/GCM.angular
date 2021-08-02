import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHospitalisationComponent } from './add-hospitalisation.component';

describe('AddHospitalisationComponent', () => {
  let component: AddHospitalisationComponent;
  let fixture: ComponentFixture<AddHospitalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHospitalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHospitalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
