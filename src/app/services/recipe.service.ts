import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url = 'http://localhost:3000';
  constructor() {}

 async getRecipes() {
  return fetch(`${this.url}/recipes`)
  .then(res => res.json());
 }

 async getRecipe(ingredients: string) {
  const response = await fetch(`${this.url}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ingredients })
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  return response.json();
 }

}
