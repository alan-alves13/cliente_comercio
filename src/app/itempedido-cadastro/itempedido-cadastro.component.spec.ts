import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempedidoCadastroComponent } from './itempedido-cadastro.component';

describe('ItempedidoCadastroComponent', () => {
  let component: ItempedidoCadastroComponent;
  let fixture: ComponentFixture<ItempedidoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItempedidoCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItempedidoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
