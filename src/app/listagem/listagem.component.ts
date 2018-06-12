import { Component, OnInit } from '@angular/core';
import { FotoService } from '../services/foto.service';
import { Foto } from '../foto/foto';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos: Foto[]

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
                  () => {
                    this.listaFotos = this.listaFotos.filter(fotoLista => fotoLista._id != foto._id )
                    console.log(`Foto ${foto.titulo} apagada com sucesso`)
                  }
                  
                )
  }

}
