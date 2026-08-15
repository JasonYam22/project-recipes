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
    
  }
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
        placeholder="Ingredients, comma separated"
        value={editedRecipe.ingredients}
        onChange={handleChange}
      />

      <textarea
        name="recipe"
        placeholder="Steps, one per line"
        value={editedRecipe.recipe}
        onChange={handleChange}
      />

      <button type="submit">Save recipe</button>
    </form>
  );
}

export default AddRecipeItem;
