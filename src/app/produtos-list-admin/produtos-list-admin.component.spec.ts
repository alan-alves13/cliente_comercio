import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosListAdminComponent } from './produtos-list-admin.component';

describe('ProdutosListAdminComponent', () => {
  let component: ProdutosListAdminComponent;
  let fixture: ComponentFixture<ProdutosListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosListAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
