import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSecretaireComponent } from './list-secretaire.component';

describe('ListSecretaireComponent', () => {
  let component: ListSecretaireComponent;
  let fixture: ComponentFixture<ListSecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSecretaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
