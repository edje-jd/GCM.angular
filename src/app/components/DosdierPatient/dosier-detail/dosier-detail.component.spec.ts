import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosierDetailComponent } from './dosier-detail.component';

describe('DosierDetailComponent', () => {
  let component: DosierDetailComponent;
  let fixture: ComponentFixture<DosierDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosierDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DosierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
