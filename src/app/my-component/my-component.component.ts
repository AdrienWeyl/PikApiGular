import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeApiService} from '../poke-api.service';
import {HttpClient} from '@angular/common/http';
import {TransfertService} from '../transfert.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  id : string;
  pokemons : Pokemon[]
  choix: Pokemon;
  filter: any = '';
  go(){
    console.log(this.choix);
    this.transfert.pokemon = this.choix.id;
  };



  constructor(public api : PokeApiService, public transfert : TransfertService){
    this.api.getAllPokemons().subscribe((data:{})=>
      this.extract(data["results"])
    )
  }

  ngOnInit() {

  }

  private extract(data: any) {
    this.pokemons = [];
    for(let pok in data){
      this.pokemons.push(new Pokemon(parseInt(pok)+1, data[pok].name))
    }
  }
}
