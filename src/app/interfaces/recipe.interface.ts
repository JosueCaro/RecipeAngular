export interface IRecipe {
  title: string,
  category: string,
  minutes: number,
  ingredients: string[],
  instructions: string[],
  prompt: string,
  stars: number,
  imageUrl: string
}
