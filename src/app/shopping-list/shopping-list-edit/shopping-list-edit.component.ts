import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() ingredientEv = new EventEmitter<Ingredient>();

  @ViewChild('nameInp', {static: false}) name: ElementRef;

  @ViewChild('amountInp', {static: false}) amount: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addIngridient() {
    this.ingredientEv.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

}
