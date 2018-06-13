import { Component, OnInit, Input } from '@angular/core';

export enum MensagemTipo {
  Sucesso = 'success',
  Padrao = 'default',
  Primario = 'primary',
  Secundario = 'secondary',
  Perigo = 'danger',
  Alerta = 'warning',
  Informativo = 'info',
  Claro = 'light',
  Escuro = 'dark'
}

@Component({
  selector: 'app-mensagem',
  template: `
    <p class="alert alert-{{tipo}}">
      <ng-content></ng-content>  
    </p>
  `,
  styles: []
})
export class MensagemComponent implements OnInit {

  @Input() tipo = MensagemTipo.Padrao

  constructor() { }

  ngOnInit() {}

}
