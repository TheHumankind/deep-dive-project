import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [new Ingredient('potato', 2), new Ingredient('carrot', 1)];

  constructor() { }

  ngOnInit(): void {
  }

}
