import { Component, OnInit, ElementRef, ViewChild, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Ingredients } from 'src/app/shared/ingredients';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('#nameInput') nameInputRef: ElementRef;
  @ViewChild('#amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded =  new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredients(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }

}
