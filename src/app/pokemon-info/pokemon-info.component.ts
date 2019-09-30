import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {TransfertService} from '../transfert.service';
import {PokeApiService} from '../poke-api.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {
  pokemon : Pokemon
  constructor(public transfert : TransfertService , private api : PokeApiService) {
  }

  ngOnInit() {
    const pokemonObservable = this.transfert.getPokemonObservable();
    pokemonObservable.subscribe((data) => {
      if(data !== undefined) {
        this.api.getPokemon(data).subscribe((data: {}) => {
          console.log(data["stats"])
          this.pokemon = new Pokemon(data["id"], data["name"]);
          this.pokemon.stats = data["stats"];
        })
      }
    });
  }

}
