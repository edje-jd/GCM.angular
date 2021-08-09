import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHospitalisationComponent } from './details-hospitalisation.component';

describe('DetailsHospitalisationComponent', () => {
  let component: DetailsHospitalisationComponent;
  let fixture: ComponentFixture<DetailsHospitalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsHospitalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHospitalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
