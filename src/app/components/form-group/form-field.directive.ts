import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[cmailFormField]'
})
export class FormFieldDirective {

    constructor(private campo: ElementRef){}

    //qdo a diretiva for inicializada
    ngOnInit(){
        const campo:HTMLInputElement = this.campo.nativeElement;

        if(campo.name != ''){
            campo.id = campo.name;
            campo.placeholder = ' ';
            campo.classList.add('mdl-textfield__input')
        } 
        else {
            throw new Error('Atributo name é obrigatório com a diretiva cmailFormField')
        }
    }

}
