import RecipeCard from "./RecipeCard";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import AddRecipeSection from "./AddRecipeSection";

function Recipes({ allRecipes, setAllRecipes, query}) {

  function handleUpdate(updatedRecipe) {
    const updatedRecipeDeliver = allRecipes.map((recipe) => {
      if (recipe.id === updatedRecipe.id) {
        return updatedRecipe;
      }
      return recipe;
    });

    setAllRecipes(updatedRecipeDeliver);
  }

  function handleDeleteButton(id) {
    let filterRecipes = allRecipes.filter((recipe) => {
      return recipe.id !== id;
    });
    setAllRecipes(filterRecipes);
  }

  const filteredRecipes = allRecipes.filter((recipe) =>
  recipe.name.toLowerCase().includes(query.toLowerCase())
);

  return (
    <div>
      <AddRecipeSection allRecipes={allRecipes} setAllRecipes={setAllRecipes} />
      {filteredRecipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <RecipeCard
              recipe={recipe}
              handleDeleteButton={handleDeleteButton}
              handleUpdate={handleUpdate}
            />
            </div>
        );
      })}
    </div>
  );
}

export default Recipes;
