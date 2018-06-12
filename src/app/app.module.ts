import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CardModule } from "./card/card.module";
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ModuloRoteador } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    ModuloRoteador
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
