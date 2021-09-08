import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnalyseDetailComponent } from './annalyse-detail.component';

describe('AnnalyseDetailComponent', () => {
  let component: AnnalyseDetailComponent;
  let fixture: ComponentFixture<AnnalyseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnalyseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnalyseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
