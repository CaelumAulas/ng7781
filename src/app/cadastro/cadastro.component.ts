import { Component, OnInit, ViewChild } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute, Router } from "@angular/router";
import { MensagemTipo } from "../mensagem/mensagem.component";
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

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

  mensagemTipoEnum = MensagemTipo
  mensagemTipo: string
  mensagemTexto: string

  formCadastro: FormGroup 

  titulo = new FormControl('', Validators.compose([
                                  Validators.required,
                                  Validators.minLength(10)
                                ]))

  constructor(private service: FotoService
              ,private rotaAtiva: ActivatedRoute
              ,private roteador: Router
              ,private formBuilder: FormBuilder){

            this.formCadastro = formBuilder.group({
              titulo: this.titulo,
              url: ['', Validators.required],
              descricao: ''
            })


    }

  ngOnInit(){

    this.rotaAtiva.params.subscribe(
      parametrosDaRota => {
        if(parametrosDaRota.fotoId){
          this.service.obterFoto(parametrosDaRota.fotoId)
                      .subscribe(
                        fotoApi => {
                          this.foto = fotoApi
                          this.formCadastro.get('titulo').setValue(fotoApi.titulo)
                          this.formCadastro.get('url').setValue(fotoApi.url)
                          this.formCadastro.get('descricao').setValue(fotoApi.descricao)
                        }
                      )
        }
      }
    )
  }

  enviarFoto(){

    this.foto.titulo = this.formCadastro.get('titulo').value
    this.foto.url = this.formCadastro.get('url').value
    this.foto.descricao = this.formCadastro.get('descricao').value

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
