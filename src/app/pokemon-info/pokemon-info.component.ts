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
  pokemon : Pokemon = new Pokemon(0, "")
  constructor(public transfert : TransfertService , private api : PokeApiService) {
  }

  getPokemon(){
    this.transfert.getPokemon.subscribe(id => {
      console.log("coucou")
      if(id !== undefined) {
        this.api.getPokemon(id).subscribe((data: {}) => {
          console.log(data["stats"])
          this.pokemon = new Pokemon(0, "")
          this.pokemon.stats = data["stats"];
        })
      }
    })
    return this.pokemon
  }

  ngOnInit() {
    this.getPokemon()
  }

}
