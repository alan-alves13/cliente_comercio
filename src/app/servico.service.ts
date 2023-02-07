import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from './produtos';
import { Usuario } from './usuarios';
import { Pedidos } from './pedidos';
import { ItemPedido } from './itempedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {


  constructor(private http: HttpClient ) { }


 /* getProduto(): Observable<Produto[]>{

    //Recuperar o token da API
  
    return this.http.get<Produto[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/',{headers: new HttpHeaders(
      {
        'Authorization': 'Bearer' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InFWOFFUN2JwN1hnMW9xRTZ0ZUlnZyJ9.eyJpc3MiOiJodHRwczovL2Rldi0zdXF1c3J1aXRzaWducnJlLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJZcnpoYnhnd3BlcG1KQ1AwUFZCbkRPTE1aSzJuSHUycUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hdXRoMC1qd3QtYXV0aG9yaXplciIsImlhdCI6MTY3NTQzMTc5NSwiZXhwIjoxNjc3Mjk1Nzk1LCJhenAiOiJZcnpoYnhnd3BlcG1KQ1AwUFZCbkRPTE1aSzJuSHUycSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.u9Kq3YTNGBwnJgLP5x4TvPeJER21T4fLMBsPm377ExZ6ibx3ZQaMinDT6q9ejpeqvcvgZZYo8aCDhz_2V9kAOascdPf0-VAUb5XkKuguOsNI6U48i3RvWPIb-V_cGbgdAYwZ7fihEPVI__pvb0zPOQdP3A5uVvI1xZccGovTBXH0ImeCngrGqm0a-PQg2Wv9EXLE-X63xXxPZ0LNLXikUEcfYJEgBZY8kPfONb7So07G-Dw8tSyzwd5wZ5H2Yrjo7RWli_jlAoHZXZiNXKDfzZ5UXIYgGQZFMkKd-5s_X4FjFxe9Djqo4eRenguKqVZ-nB9B1Ubo7C0Gn-UKCNuDfA',
         'Content-Type': 'application/json'
            })});
    //return this.http.get<Produto[]>('http://localhost:3000/produtos');

  } */
  getProduto(): Observable<Produto[]>{
        return this.http.get<Produto[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/');
        //return this.http.get<Produto[]>('http://localhost:3000/produtos');
 
      }
  


  getProdutoByID(id: number): Observable<Produto>{
     const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
    //const url = `http://localhost:3000/produtos/${id}`;

    return this.http.get<Produto>(url);
  }

  addProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/', produto);
  //return this.http.post<Produto>('http://localhost:3000/produtos', produto);
    
  }

  updateProduto(produto: Produto): Observable<Produto>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${produto.id}`;
   //  const url = `http://localhost:3000/produtos/${produto.id}`;

   return this.http.put<Produto>(url, produto);
  }

  detelarProduto(id: number): Observable<Produto>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
   const url = `http://localhost:3000/produtos/${id}`;

   return this.http.delete<Produto>(url);
  }

  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/');
    //return this.http.get<Usuario[]>('http://localhost:3000/usuarios');

  }
  getUsuarioByID(id: number): Observable<Usuario>{
     const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/${id}`;
    //const url = `http://localhost:3000/usuarios/${id}`;

    return this.http.get<Usuario>(url);
  }

  addUsuario(usuario: Usuario): Observable<Usuario>{
   return this.http.post<Usuario>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/', usuario);
  //return this.http.post<Usuario>('http://localhost:3000/usuarios', usuario);
    
  }

  updateUsuario(usuario: Usuario): Observable<Usuario>{
     const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/${usuario.id}`;
    // const url = `http://localhost:3000/usuario/${usuario.id}`;

   return this.http.put<Usuario>(url, usuario);
  }

  deletarUsuario(id: number): Observable<Usuario>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/${id}`;
   //const url = `http://localhost:3000/usuarios/${id}`;

   return this.http.delete<Usuario>(url);
  }

  getPedidos(): Observable<Pedidos[]>{
    return this.http.get<Pedidos[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/pedidos/');
    //return this.http.get<Produto[]>('http://localhost:3000/produtos');

  }
  
  getItemPedido(): Observable<ItemPedido[]>{
    return this.http.get<ItemPedido[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/itempedido/');
    //return this.http.get<Produto[]>('http://localhost:3000/produtos');

  }


  

}
