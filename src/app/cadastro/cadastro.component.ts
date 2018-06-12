import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute } from "@angular/router";

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

  constructor(private service: FotoService
              ,private rotaAtiva: ActivatedRoute){}

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
                    () => console.log(`${this.foto.titulo} atualizada com sucesso`)
                  )

    } 
    else {
      this.service.cadastrar(this.foto)
                  .subscribe(
                    (resposta) => console.log(resposta)
                    ,
                    erro => console.log(erro)
                  )
    }
  }
}
