import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonanceDetailsComponent } from './ordonance-details.component';

describe('OrdonanceDetailsComponent', () => {
  let component: OrdonanceDetailsComponent;
  let fixture: ComponentFixture<OrdonanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdonanceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
