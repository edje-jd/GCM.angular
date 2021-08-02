import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdonanceComponent } from './list-ordonance.component';

describe('ListOrdonanceComponent', () => {
  let component: ListOrdonanceComponent;
  let fixture: ComponentFixture<ListOrdonanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrdonanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdonanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
