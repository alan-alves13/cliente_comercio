import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDetalhesComponent } from './pedidos-detalhes.component';

describe('PedidosDetalhesComponent', () => {
  let component: PedidosDetalhesComponent;
  let fixture: ComponentFixture<PedidosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
