import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto: Foto = {
    url: '',
    titulo: '',
    descricao: ''
  }

  constructor(private conexaoApi: HttpClient){}

  ngOnInit(){}

  enviarFoto(){

    this.conexaoApi.post('http://localhost:3000/v1/fotos', 
                        this.foto, {
                          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
                          , observe: "response" //para pegar a resposta Http
                      })
                    .subscribe(
                      (resposta) => console.log(resposta)
                      ,
                      erro => console.log(erro)
                    )
  }
}
