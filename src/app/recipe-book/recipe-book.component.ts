import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {

  recipeDetail: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    console.log(this.recipeDetail);
  }
}
