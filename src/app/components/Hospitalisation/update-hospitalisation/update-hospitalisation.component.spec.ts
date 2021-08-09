import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHospitalisationComponent } from './update-hospitalisation.component';

describe('UpdateHospitalisationComponent', () => {
  let component: UpdateHospitalisationComponent;
  let fixture: ComponentFixture<UpdateHospitalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHospitalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHospitalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
