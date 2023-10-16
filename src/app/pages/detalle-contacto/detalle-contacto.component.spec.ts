import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleContactoComponent } from './detalle-contacto.component';

describe('DetalleContactoComponent', () => {
  let component: DetalleContactoComponent;
  let fixture: ComponentFixture<DetalleContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleContactoComponent]
    });
    fixture = TestBed.createComponent(DetalleContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
