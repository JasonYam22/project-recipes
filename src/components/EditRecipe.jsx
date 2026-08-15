import { useState } from "react";

function EditRecipe({ recipe, handleUpdate }) {
    const [isEditing,setIsEditing] = useState(false);
    const [editedRecipe, setEditedRecipe] = useState({
        id: recipe.id,
        name: recipe.name,
        ingredients: recipe.ingredients.join(", "),
        recipe: recipe.recipe.join("\n"),
        calories: recipe.calories,
        isVegan: recipe.isVegan,
        image: recipe.image,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedRecipe= {...editedRecipe, ingredients: editedRecipe.ingredients.split(","), recipe: editedRecipe.recipe.split("\n")
    }
    handleUpdate(updatedRecipe);
  }

  return (
    <div>
        <button onClick={() => setIsEditing(!isEditing)}> Edit </button>
        <form onSubmit={handleSubmit}>
      <input name="name" value={editedRecipe.name} onChange={handleChange} />
      <input name="calories" value={editedRecipe.calories} onChange={handleChange} />
      <input name="image" value={editedRecipe.image} onChange={handleChange} />
      <input name="ingredients" value={editedRecipe.ingredients} onChange={handleChange} />
      <input name="recipe" value={editedRecipe.recipe} onChange={handleChange} />
      <input type="checkbox" checked={editedRecipe.isVegan} onChange={(event) => {setEditedRecipe({...editedRecipe, isVegan: event.target.checked});
    }}/>
    <button type="submit"> Save </button>
   </form>
   </div>
  );
}
export default EditRecipe;
