import axios from 'axios'

const openApiInstance = axios.create({
  baseURL: 'https://api.openai.com/v1',
})

const RECIPES_PROMPT = {
  role: "system",
  content: "You are a CHEF, users will give you an array of ingredients and you will tell them various options for recipes, up to 4 recipes but at least include 2. Your response must be an structured JSON, you should return an array of objects, each object should have these attributes: name, description, steps, cookingTime"
}


function buildPromptForRecipes(ingredients: string[]) {
  return {
    "role": "user",
    "content": `My ingredients are: ${ingredients.join(', ')}`
  }
}