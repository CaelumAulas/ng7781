import { Component, OnInit, ViewChild } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto: Foto = {
    url: '',
    titulo: '',
    descricao: '',
    _id: ''
  }

  // @ViewChild('mensagemCpn')
  // mensagemCpn: MensagemComponent
  
  mensagemTipo: string
  mensagemTexto: string

  constructor(private service: FotoService
              ,private rotaAtiva: ActivatedRoute
            , private roteador: Router){}

  ngOnInit(){

    this.rotaAtiva.params.subscribe(
      parametrosDaRota => {
        if(parametrosDaRota.fotoId){
          this.service.obterFoto(parametrosDaRota.fotoId)
                      .subscribe(
                        fotoApi => this.foto = fotoApi
                      )
        }
      }
    )
  }

  enviarFoto(){

    if(this.foto._id){

      this.service.atualizar(this.foto)
                  .subscribe(
                    mensagemApi => {

                      this.mensagemTexto = mensagemApi.texto
                      this.mensagemTipo = mensagemApi.tipo
                      
                      setTimeout(() => {
                        this.roteador.navigate([''])                     
                      }, 2500);
                    }
                  )

    } 
    else {
      this.service.cadastrar(this.foto)
                  .subscribe(
                    mensagemApi => {
                      
                      this.mensagemTexto = mensagemApi.texto
                      this.mensagemTipo = mensagemApi.tipo

                      this.foto.titulo = ''
                      this.foto.url = ''
                      this.foto.descricao = ''

                      setTimeout(() => {
                        this.mensagemTexto = ''
                      }, 2500);
                    }
                    ,
                    erro => console.log(erro)
                  )
    }
  }
}
