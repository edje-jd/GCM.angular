import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhoraireComponent } from './add-phoraire.component';

describe('AddPhoraireComponent', () => {
  let component: AddPhoraireComponent;
  let fixture: ComponentFixture<AddPhoraireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhoraireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
