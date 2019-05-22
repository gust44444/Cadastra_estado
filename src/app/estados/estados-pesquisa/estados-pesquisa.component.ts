import { Component, OnInit } from '@angular/core';
import { EstadossService } from '../estados.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-estados-pesquisa',
  templateUrl: './estados-pesquisa.component.html',
  styleUrls: ['./estados-pesquisa.component.css']
})
export class EstadosPesquisaComponent implements OnInit {

  estados = [];

  nomeBusca:string;

  constructor(
        private service:EstadossService,
        private msg: MessageService,
        private conf: ConfirmationService) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.estados=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(estado:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+estado.nome+'?',
      accept: () => {
        this.excluir(estado);
      }
    });
  }


  excluir(estado: any){
    this.service.excluir(estado.id).then(() =>{
      this.pesquisar();
      this.msg.add({severity:'Exclusão'+estado.nome, summary:'Service Message',detail:'Estado'});
    });
  }

  filtrarEstado(estado: string) {
    this.service.listarPorNome(estado).then(dados => {
      this.estados = dados;
    });
  }
}
