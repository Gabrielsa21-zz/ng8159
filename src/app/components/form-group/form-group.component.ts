import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  idCampo = '';
  @Input() controle: FormControl;
 
  //DI - Dependency Injection
  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    const input:HTMLInputElement = this.elemento.nativeElement.querySelector('input');
    this.idCampo = input.name;
  }
}

