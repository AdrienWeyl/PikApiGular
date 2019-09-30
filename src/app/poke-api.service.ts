import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService implements OnInit{

  constructor(private http : HttpClient ) { }


  getAllPokemons(){
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon?limit=1000")
  }

  getPokemon(id){
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/"+id)
  }

  ngOnInit(): void {
    this.getAllPokemons().subscribe(data => console.log(data))
  }


}
