import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-foto',
    template: `<img class="d-block mx-auto img-fluid" src="{{url}}" alt="{{titulo}}">`,
    styles: []
})
export class FotoComponent {
    @Input() url = ''
    @Input() titulo = ''
}