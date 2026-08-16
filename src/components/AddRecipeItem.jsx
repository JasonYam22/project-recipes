import { useState } from "react";

function AddRecipeItem({ allRecipes, setAllRecipes, setIsSectionOpen }) {
  const [editedRecipe, setEditedRecipe] = useState({
    id: "",
    name: "",
    ingredients: "",
    recipe: "",
    calories: "",
    isVegan: false,
    image: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newRecipe = {
      ...editedRecipe,
      id: crypto.randomUUID(),
      ingredients: editedRecipe.ingredients.split(","),
      recipe: editedRecipe.recipe.split("\n"),
    };
    
    setAllRecipes([...allRecipes, newRecipe]);
    setIsSectionOpen(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={editedRecipe.name}
        onChange={handleChange}
      />

      <input
        name="calories"
        placeholder="Calories"
        value={editedRecipe.calories}
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        value={editedRecipe.image}
        onChange={handleChange}
      />

      <textarea
        name="ingredients"
        placeholder="Ingredients"
        value={editedRecipe.ingredients}
        onChange={handleChange}
      />

      <textarea
        name="recipe"
        placeholder="Recipe"
        value={editedRecipe.recipe}
        onChange={handleChange}
      />

      <label>
        <input
         type="checkbox"
        checked={editedRecipe.isVegan}
        onChange={(e) =>
          setEditedRecipe({...editedRecipe, isVegan: e.target.checked})
        } 
        />
      </label>

      <button type="submit">Save recipe</button>
    </form>
  );
}

export default AddRecipeItem;
