import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CardModule } from "./card/card.module";
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ModuloRoteador } from "./app.routes";
import { FotoService } from "./services/foto.service";
import { MensagemComponent } from "./mensagem/mensagem.component";
import { FiltroPorTituloPipe } from "./listagem/filtroPorTitulo.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    MensagemComponent,
    FiltroPorTituloPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ModuloRoteador
  ],
  providers: [ FotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
