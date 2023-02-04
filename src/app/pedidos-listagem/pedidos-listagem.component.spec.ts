import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListagemComponent } from './pedidos-listagem.component';

describe('PedidosListagemComponent', () => {
  let component: PedidosListagemComponent;
  let fixture: ComponentFixture<PedidosListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
