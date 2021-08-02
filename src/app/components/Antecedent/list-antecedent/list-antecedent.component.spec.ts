import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAntecedentComponent } from './list-antecedent.component';

describe('ListAntecedentComponent', () => {
  let component: ListAntecedentComponent;
  let fixture: ComponentFixture<ListAntecedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAntecedentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAntecedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
