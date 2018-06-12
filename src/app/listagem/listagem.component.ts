import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos

  constructor(conexaoApi: HttpClient) {

    conexaoApi.get('http://localhost:3000/v1/fotos')
      .subscribe(
        fotosApi => this.listaFotos = fotosApi
        , erro => console.log(erro)
      )
  }

  ngOnInit() {
  }

}
