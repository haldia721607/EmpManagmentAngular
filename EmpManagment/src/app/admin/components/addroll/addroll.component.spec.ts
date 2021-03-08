import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrollComponent } from './addroll.component';

describe('AddrollComponent', () => {
  let component: AddrollComponent;
  let fixture: ComponentFixture<AddrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
