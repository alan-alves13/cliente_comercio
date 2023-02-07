import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempedidoListagemComponent } from './itempedido-listagem.component';

describe('ItempedidoListagemComponent', () => {
  let component: ItempedidoListagemComponent;
  let fixture: ComponentFixture<ItempedidoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItempedidoListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItempedidoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
