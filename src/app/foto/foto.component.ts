import { Component, Input } from "@angular/core";
import { Foto } from "./foto";

@Component({
    selector: 'app-foto',
    template: `<img class="card-img-top" src="{{url}}" alt="{{titulo}}">`,
    styles: []
})
export class FotoComponent implements Foto {
    @Input() url = ''
    @Input() titulo = ''
             descricao = ''
}