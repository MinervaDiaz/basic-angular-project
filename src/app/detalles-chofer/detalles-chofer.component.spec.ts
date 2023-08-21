import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesChoferComponent } from './detalles-chofer.component';

describe('DetallesChoferComponent', () => {
  let component: DetallesChoferComponent;
  let fixture: ComponentFixture<DetallesChoferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesChoferComponent]
    });
    fixture = TestBed.createComponent(DetallesChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
