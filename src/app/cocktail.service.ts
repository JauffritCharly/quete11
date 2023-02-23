import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './models/cocktail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

constructor(public http : HttpClient) { }


public getCocktails(): Observable<Cocktail[]>{
  return this.http.get<Cocktail[]>("assets/cocktails.json")
}
}
