import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdonanceComponent } from './add-ordonance.component';

describe('AddOrdonanceComponent', () => {
  let component: AddOrdonanceComponent;
  let fixture: ComponentFixture<AddOrdonanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrdonanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdonanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
