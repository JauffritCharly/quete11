import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  
  public cocktails : Cocktail[] = [];
  
  constructor(public cocktailService : CocktailService) { }

  ngOnInit() {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJson => {
      this.cocktails = cocktailsFromJson;
    })
  }
}
