import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators }
from '@angular/forms';
import { RecipeService } from './services/recipe.service';
import { IRecipe } from './interfaces/recipe.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  recipes: IRecipe[] = [];
  isLoading: boolean = false;
  form: FormGroup = new FormGroup({
    ingredients: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  });
  constructor(private recipeService: RecipeService) {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }
  async validar() {
    this.form.controls['ingredients'].markAsDirty();
    if (this.form.valid) {
      this.form.controls['ingredients'].disable();
      this.isLoading = true;
      await this.recipeService.getRecipe(this.form.controls['ingredients'].value);
      await this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
      this.form.controls['ingredients'].enable();
      this.isLoading = false;
    }
  }

}
