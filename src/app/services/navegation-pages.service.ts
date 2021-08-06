import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavegationPagesService {
  private _pagina = new BehaviorSubject<string>('');
  public pagina$ = this._pagina.asObservable();

  private _seleccionado = new BehaviorSubject<string>('Inicio');
  public seleccionado$ = this._seleccionado.asObservable();
  constructor() {}

  navegationPages(pagina: string): void {
    this._pagina.next(pagina);
  }

  seleccionado(item: string): void {
    this._seleccionado.next(item);
  }
}
