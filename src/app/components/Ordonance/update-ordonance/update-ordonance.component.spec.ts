import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrdonanceComponent } from './update-ordonance.component';

describe('UpdateOrdonanceComponent', () => {
  let component: UpdateOrdonanceComponent;
  let fixture: ComponentFixture<UpdateOrdonanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrdonanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrdonanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
