import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "../foto/foto";

@Pipe({
    name: 'filtroPorTitulo',
    pure: true
})
export class FiltroPorTituloPipe implements PipeTransform{

    transform(listaFotos: Foto[], termoFiltrado: string){

        return listaFotos.filter(foto => foto.titulo.toLowerCase().includes(termoFiltrado.toLowerCase()))
    }
    
}