import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-foto',
    template: `<img class="card-img-top" src="{{url}}" alt="{{titulo}}">`,
    styles: []
})
export class FotoComponent {
    @Input() url = ''
    @Input() titulo = ''
}