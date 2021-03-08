import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrollComponent } from './editroll.component';

describe('EditrollComponent', () => {
  let component: EditrollComponent;
  let fixture: ComponentFixture<EditrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
