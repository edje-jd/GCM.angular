import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhoraireComponent } from './list-phoraire.component';

describe('ListPhoraireComponent', () => {
  let component: ListPhoraireComponent;
  let fixture: ComponentFixture<ListPhoraireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhoraireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
