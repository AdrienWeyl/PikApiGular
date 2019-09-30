import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent} from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import {PokeApiService} from './poke-api.service';
import {HttpClientModule} from '@angular/common/http';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import {TransfertService} from './transfert.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokemonInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokeApiService, TransfertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
