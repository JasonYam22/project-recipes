import RecipeCard from "./RecipeCard";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import AddRecipeSection from "./AddRecipeSection";
import {useState} from "react";

function Recipes({ allRecipes, setAllRecipes, query}) {

  const [currentPage,setCurrentPage] = useState(1);

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

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;

  const recipesToShow = filteredRecipes.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
    return (
  <div>
    <AddRecipeSection
      allRecipes={allRecipes}
      setAllRecipes={setAllRecipes}
    />

    {recipesToShow.map((recipe) => {
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

    <div className="pagination">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    &lt;
  </button>

  <span>{currentPage}</span>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    &gt;
  </button>
</div>
  </div>
);
}

export default Recipes;
