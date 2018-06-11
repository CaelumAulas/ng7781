import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'CaelumPic'
  listaFotos

  constructor(conexaoApi: HttpClient){

    conexaoApi.get('http://localhost:3000/v1/fotos')
              .subscribe(
                fotosApi => this.listaFotos = fotosApi
                ,erro => console.log(erro)
              )
  }
}