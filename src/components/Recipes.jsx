import { useState } from "react";
import recipesData from "../assets/Recipe.json";
import RecipeCard from "./RecipeCard";

function Recipes() {
const [showRecipe, setShowRecipe] = useState(recipesData)

function handleDeleteButton(id){
  let filterRecipes = showRecipe.filter((recipe) =>{
    return recipe.id !== id;
})
  setShowRecipe(filterRecipes);
}
  return (
    <div>
      {showRecipe.map((recipe) => {
        return (
            <RecipeCard key={recipe.id} recipe={recipe} handleDeleteButton={handleDeleteButton}/>
        )
      })}
    </div>
  );
}

export default Recipes;
