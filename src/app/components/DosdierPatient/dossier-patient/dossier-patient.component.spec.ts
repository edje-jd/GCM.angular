import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierPatientComponent } from './dossier-patient.component';

describe('DossierPatientComponent', () => {
  let component: DossierPatientComponent;
  let fixture: ComponentFixture<DossierPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
