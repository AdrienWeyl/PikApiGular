import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  id = '';
  pokemons = [
    new Pokemon(6, 'Dracaufeu'),
    new Pokemon(112, 'Rhinoféros'),
    new Pokemon(199, 'Roigaga'),
    new Pokemon(221, 'Cochinon'),
    new Pokemon(467, 'Maganon'),
  ];

  constructor() {}

  ngOnInit() {
  }

}
