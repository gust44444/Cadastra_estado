import { EstadossService } from './estados.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosPesquisaComponent } from './estados-pesquisa/estados-pesquisa.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule} from 'primeng/confirmdialog';
import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EstadosPesquisaComponent, EstadosCadastroComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports: [
    EstadosPesquisaComponent,
    EstadosCadastroComponent
],
providers: [
  EstadossService,
  MessageService
]
})
export class CategoriasModule { }
