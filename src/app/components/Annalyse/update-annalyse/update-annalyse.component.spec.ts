import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnnalyseComponent } from './update-annalyse.component';

describe('UpdateAnnalyseComponent', () => {
  let component: UpdateAnnalyseComponent;
  let fixture: ComponentFixture<UpdateAnnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
