import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produtos';
import { Usuario } from './usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient ) { }


  getProduto(): Observable<Produto[]>{
    //return this.http.get<Produto[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/');
    return this.http.get<Produto[]>('http://localhost:3000/produtos');

  }
  getProdutoByID(id: number): Observable<Produto>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
    const url = `http://localhost:3000/produtos/${id}`;

    return this.http.get<Produto>(url);
  }

  addProduto(produto: Produto): Observable<Produto>{
   // return this.http.post<Produto>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/', produto);
  return this.http.post<Produto>('http://localhost:3000/produtos', produto);
    
  }

  updateProduto(produto: Produto): Observable<Produto>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${produto.id}`;
     const url = `http://localhost:3000/produtos/${produto.id}`;

   return this.http.put<Produto>(url, produto);
  }

  detelarProduto(id: number): Observable<Produto>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
   const url = `http://localhost:3000/produtos/${id}`;

   return this.http.delete<Produto>(url);
  }

  getUsuario(): Observable<Usuario[]>{
    //return this.http.get<Produto[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/');
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios');

  }
  getUsuarioByID(id: number): Observable<Usuario>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
    const url = `http://localhost:3000/usuarios/${id}`;

    return this.http.get<Usuario>(url);
  }

  addUsuario(usuario: Usuario): Observable<Usuario>{
   // return this.http.post<Produto>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/', produto);
  return this.http.post<Usuario>('http://localhost:3000/usuarios', usuario);
    
  }

  updateUsuario(usuario: Usuario): Observable<Usuario>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${produto.id}`;
     const url = `http://localhost:3000/usuario/${usuario.id}`;

   return this.http.put<Usuario>(url, usuario);
  }

  deletarUsuario(id: number): Observable<Usuario>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
   const url = `http://localhost:3000/usuarios/${id}`;

   return this.http.delete<Usuario>(url);
  }
}
