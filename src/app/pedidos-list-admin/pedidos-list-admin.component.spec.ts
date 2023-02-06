import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListAdminComponent } from './pedidos-list-admin.component';

describe('PedidosListAdminComponent', () => {
  let component: PedidosListAdminComponent;
  let fixture: ComponentFixture<PedidosListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosListAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
