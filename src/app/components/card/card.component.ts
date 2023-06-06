import { Component, Input } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/recipe.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() recipe!: IRecipe;
}
