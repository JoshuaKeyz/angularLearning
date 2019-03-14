import { Component } from '@angular/core';
import { Ingredients } from './shared/ingredients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigated(feature: string) {
    this.loadedFeature = feature;
  }
  
}
