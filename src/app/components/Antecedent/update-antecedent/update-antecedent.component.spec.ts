import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAntecedentComponent } from './update-antecedent.component';

describe('UpdateAntecedentComponent', () => {
  let component: UpdateAntecedentComponent;
  let fixture: ComponentFixture<UpdateAntecedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAntecedentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAntecedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
