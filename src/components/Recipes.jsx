import { useState } from "react";
import recipesData from "../assets/Recipe.json";
import RecipeCard from "./RecipeCard";

function Recipes ({allRecipes, setAllRecipes}) {

function handleUpdateButton(id){
  const filterRecipes = allRecipes.filter((recipe) => {
    return recipe.id !== id;
  })
  setAllRecipes(allRecipes);
}

function handleDeleteButton(id){
  let filterRecipes = allRecipes.filter((recipe) =>{
    return recipe.id !== id;
})
  setAllRecipes(filterRecipes);
}
  return (
    <div>
      {allRecipes.map((recipe) => {
        return (
            <RecipeCard key={recipe.id} recipe={recipe} handleDeleteButton={handleDeleteButton}/>
        )
      })}
    </div>
  );
}

export default Recipes;
