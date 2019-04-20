import { Component, Output, EventEmitter } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', 'header-search.css']
})
export class HeaderComponent {

  isMenuOpen = false;
  tituloHeader = 'CMail';
  @Output() filtrar = new EventEmitter();

  constructor(private pageService: PageDataService) {
    this.pageService
          .titulo
          .subscribe(
            novoTitulo => this.tituloHeader = novoTitulo
          )
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.removeItem('cmail-token');
  }

  handleFiltro({target}){
    this.filtrar.emit(target.value);
  }
}
