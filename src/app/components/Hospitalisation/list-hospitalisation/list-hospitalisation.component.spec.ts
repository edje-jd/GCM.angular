import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHospitalisationComponent } from './list-hospitalisation.component';

describe('ListHospitalisationComponent', () => {
  let component: ListHospitalisationComponent;
  let fixture: ComponentFixture<ListHospitalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHospitalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHospitalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
