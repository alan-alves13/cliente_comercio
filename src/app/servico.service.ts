import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient ) { }


  getProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/');
  }
  getProdutoByID(id: number): Observable<Produto>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
    return this.http.get<Produto>(url);
  }

  addProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/', produto);
  }

  updateProduto(produto: Produto): Observable<Produto>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }

  detelarProduto(id: number): Observable<Produto>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
    return this.http.delete<Produto>(url);
  }

}
