import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListagemComponent } from './produto-listagem.component';

describe('ProdutoListagemComponent', () => {
  let component: ProdutoListagemComponent;
  let fixture: ComponentFixture<ProdutoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
