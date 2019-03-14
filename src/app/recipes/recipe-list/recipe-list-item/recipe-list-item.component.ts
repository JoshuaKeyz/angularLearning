import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { Recipe } from '../../recipe';
@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit{

  @Input('recipe-element') recipe : Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.recipeSelected.emit();
  }

}
