import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempedidoEditComponent } from './itempedido-edit.component';

describe('ItempedidoEditComponent', () => {
  let component: ItempedidoEditComponent;
  let fixture: ComponentFixture<ItempedidoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItempedidoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItempedidoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
