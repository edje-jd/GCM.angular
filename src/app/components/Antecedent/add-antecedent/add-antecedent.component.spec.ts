import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAntecedentComponent } from './add-antecedent.component';

describe('AddAntecedentComponent', () => {
  let component: AddAntecedentComponent;
  let fixture: ComponentFixture<AddAntecedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAntecedentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAntecedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
