import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarchoferComponent } from './editarchofer.component';

describe('EditarchoferComponent', () => {
  let component: EditarchoferComponent;
  let fixture: ComponentFixture<EditarchoferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarchoferComponent]
    });
    fixture = TestBed.createComponent(EditarchoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
