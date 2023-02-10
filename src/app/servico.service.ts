import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from './produtos';
import { Usuario } from './usuarios';
import { Pedidos } from './pedidos';
import { ItemPedido } from './itempedido';
import { Endereco } from './endereco';
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
  // APIS do Produto
  getProduto(): Observable<Produto[]>{
        return this.http.get<Produto[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/');
 
      }
  
  getProdutoByID(id: number): Observable<Produto>{
      const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}/`;

    return this.http.get<Produto>(url);
  }
  /*
  addProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/', produto);
    
  } */

  updateProduto(produto: Produto): Observable<Produto>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${produto.id}/`;

   return this.http.put<Produto>(url, produto);
  }

  detelarProduto(id: number): Observable<Produto>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}/`;
  // const url = `http://localhost:3000/produtos/${id}`;

   return this.http.delete<Produto>(url);
  }
  // APIS do Usuario
  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/');

  }
  getUsuarioByID(id_usuario: number): Observable<Usuario>{
     const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/${id_usuario}/`;

    return this.http.get<Usuario>(url);
  }

  addUsuario(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/', usuario);

  }

  updateUsuario(usuario: Usuario): Observable<Usuario>{
     const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/${usuario.id_usuario}/`;

   return this.http.put<Usuario>(url, usuario);
  }

  deletarUsuario(id_usuario: number): Observable<Usuario>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/${id_usuario}/`;
 
   return this.http.delete<Usuario>(url);
  }
  // APIs do Pedido
  getPedidos(): Observable<Pedidos[]>{
    return this.http.get<Pedidos[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/pedidos/');
  
  }

  addPedido(pedidos: Pedidos): Observable<Pedidos>{
    return this.http.post<Pedidos>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/pedidos/', pedidos);
   
   }
 
  updatePedido(pedidos: Pedidos): Observable<Pedidos>{
      const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/pedidos/${pedidos.id}/`;
 
    return this.http.put<Pedidos>(url, pedidos);
  }

  deletarPedido(id: number): Observable<Pedidos>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/pedidos/${id}/`;
 
   return this.http.delete<Pedidos>(url);
  }

  // APIs do ItemPedido
  getItemPedido(): Observable<ItemPedido[]>{
    return this.http.get<ItemPedido[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/itempedido/');
   
  }

  addItemPedido(ItemPedido: ItemPedido): Observable<ItemPedido>{
    return this.http.post<ItemPedido>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/itempedido/', ItemPedido);
     
   }
 
   updateItemPedido(ItemPedido: ItemPedido): Observable<ItemPedido>{
      const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/itempedido/${ItemPedido.id}/`;
 
    return this.http.put<ItemPedido>(url, ItemPedido);
   }

   deletarItemPedido(id: number): Observable<ItemPedido>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/itempedido/${id}/`;
 
   return this.http.delete<ItemPedido>(url);
  }
  // APIs do Endereco
   getEndereco(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/endereco/');

  }

  getEnderecoByID(id: number): Observable<Endereco>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/endereco/${id}/`;

    return this.http.get<Endereco>(url);
  }
  
  addEndereco(Endereco: Endereco): Observable<Endereco>{
    return this.http.post<Endereco>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/endereco/', Endereco);
     
  }
 
  updateEndereco(Endereco: Endereco): Observable<Endereco>{
      const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/endereco/${Endereco.id}/`;
 
    return this.http.put<Endereco>(url, Endereco);
  }

  deletarEndereco(id: number): Observable<Endereco>{
    const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/endereco/${id}/`;

   return this.http.delete<Endereco>(url);
  }
}
