import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnalyseComponent } from './add-annalyse.component';

describe('AddAnnalyseComponent', () => {
  let component: AddAnnalyseComponent;
  let fixture: ComponentFixture<AddAnnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
