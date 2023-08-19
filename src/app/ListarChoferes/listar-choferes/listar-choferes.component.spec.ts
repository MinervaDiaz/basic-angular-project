import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarChoferesComponent } from './listar-choferes.component';

describe('ListarChoferesComponent', () => {
  let component: ListarChoferesComponent;
  let fixture: ComponentFixture<ListarChoferesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarChoferesComponent]
    });
    fixture = TestBed.createComponent(ListarChoferesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
