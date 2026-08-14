import{useState} from "react";

function EditRecipe({ recipe, handleUpdate }) {
    const newIngredients = recipe.ingredients.join(", ");
    const editedRecipe = recipe.recipe.join("\n");

    const [name, setName] = useState(recipe.name);
    const [ingredients, setIngredients] = useState(newIngredients);
    const [newRecipe, setNewRecipe] = useState(editedRecipe);
    const [calories, setCalories] = useState(recipe.calories);
    const [isVegan, setIsVegan] = useState(recipe.isVegan);
    const [image, setImage] = useState(recipe.image);

    return(
        <h2>Edit me if you can !</h2>
    )
  }
  export default EditRecipe