import { Component, OnInit } from '@angular/core';
import { FotoService } from '../services/foto.service';
import { Foto } from '../foto/foto';
import { MensagemTipo } from "../mensagem/mensagem.component";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos: Foto[]
  mensagemTexto
  mensagemTipo

  constructor(private service: FotoService) {

    service.listar()
            .subscribe(
              fotosApi => this.listaFotos = fotosApi
              , erro => console.log(erro)
            )
  }

  ngOnInit() {}

  removerFoto(foto: Foto){

    this.service.deletar(foto)
                .subscribe(
                  mensagemApi => {
                    this.listaFotos = this.listaFotos.filter(fotoLista => fotoLista._id != foto._id )

                    this.mensagemTexto = mensagemApi.texto
                    this.mensagemTipo = mensagemApi.tipo

                    setTimeout(() => {
                      this.mensagemTexto = ''
                    }, 1500);
                  }
                  
                )
  }

}
