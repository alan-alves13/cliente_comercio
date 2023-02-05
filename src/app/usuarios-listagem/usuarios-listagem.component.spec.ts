import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListagemComponent } from './usuarios-listagem.component';

describe('UsuariosListagemComponent', () => {
  let component: UsuariosListagemComponent;
  let fixture: ComponentFixture<UsuariosListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
