import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from './model';

@Injectable({
  providedIn: 'root'
})
export class EstadossService {

  estadosURL = 'http://localhost:8080/estados';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro?: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/estados/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/estados';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }


  excluir(id:number):Promise<void>{
    return this.http.delete(this.estadosURL+"/"+id).toPromise().then(() => null);
  }

  adicionar(estado: Estado): Promise<any>{
    return this.http.post(this.estadosURL, estado)
    .toPromise();
  }

  alterar(estado: Estado): Promise<any>{
    return this.http.put(this.estadosURL+'/'+estado.id, estado)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Estado> {
    return this.http.get<Estado>(this.estadosURL+'/'+codigo).toPromise();
  }

    listarPorNome(nome: string): Promise<any> {
    return this.http.get<any>(this.estadosURL + '?nome=' + nome).toPromise();
  }

}
