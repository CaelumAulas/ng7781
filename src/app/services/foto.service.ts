import { HttpClient } from "@angular/common/http";
import { Foto } from "../foto/foto";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { MensagemTipo } from "../mensagem/mensagem.component";

const url = 'http://localhost:3000/v1/fotos/'

@Injectable({
    providedIn: 'root'
})
export class FotoService {

        constructor(private conexaoApi: HttpClient){}

        listar(): Observable<Foto[]> {
            return this.conexaoApi.get<Foto[]>(url)
        }

        obterFoto(fotoId: string): Observable<Foto> {
            return this.conexaoApi.get<Foto>(url + fotoId)
        }

        cadastrar(foto: Foto): Observable<MensagemServico>{
            return this.conexaoApi.post(url,foto).pipe(
                map(fotoId => new MensagemServico(`${foto.titulo} ${fotoId} cadastrada com sucesso`, MensagemTipo.Sucesso) )
            )
        }

        deletar(foto: Foto): Observable<MensagemServico>{
            return this.conexaoApi.delete(url + foto._id).pipe(
                map(() => new MensagemServico(`${foto.titulo} deletada com sucesso`, MensagemTipo.Perigo))
            )
        }
        
        atualizar(foto: Foto): Observable<MensagemServico>{
            return this.conexaoApi.put(url + foto._id, foto).pipe(
                map(() => new MensagemServico(`${foto.titulo} atualizada com sucesso`, MensagemTipo.Sucesso))
            )
        }

}

class MensagemServico {

    constructor(private _texto, private _tipo){}

    get texto(){
        return this._texto
    }

    get tipo(){
        return this._tipo
    }

}