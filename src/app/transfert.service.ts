import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {


  get getPokemon(): Observable<number> {
    return of(this.pokemon);
  }


  public pokemon : number

  constructor() {
  }


}
