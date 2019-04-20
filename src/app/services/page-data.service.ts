import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PageDataService {

    titulo = new EventEmitter<string>();
    
    defineTitulo(novoTitulo: string){
        document.querySelector('title').innerText = `${novoTitulo} - CMail`;
        this.titulo.emit(novoTitulo);
    }
    
}