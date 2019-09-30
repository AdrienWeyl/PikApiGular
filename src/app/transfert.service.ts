import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {
  get pokemon(): number {
    return this._pokemon;
  }

  set pokemon(value: number) {
    this._pokemon = value;
    this.observer.next(this.pokemon)
  }
  observer;

  public getPokemonObservable(): any {
  const pokemonObservable = new Observable(observer => {
    this.observer = observer;
  });

  return pokemonObservable;
}



  private _pokemon : number

  constructor() {
  }


}
