import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnnalyseComponent } from './list-annalyse.component';

describe('ListAnnalyseComponent', () => {
  let component: ListAnnalyseComponent;
  let fixture: ComponentFixture<ListAnnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
