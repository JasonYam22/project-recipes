import {Link} from "react-router-dom"

function RecipeCard({ recipe, handleDeleteButton, handleUpdate }) {
  return (
     
    <div className="Recipe" key={recipe.id}>
      <Link to={`/recipes/${recipe.id}`}>
      <img className="recipe-image" src={recipe.image} alt={recipe.name} />
      <h1>{recipe.name}</h1>
      
      <p>{recipe.calories} Kcals</p>
      <p>
        {recipe.calories <= 500
          ? "ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧ Low Calories"
          : recipe.calories <= 700
            ? "🍲Normal Calories"
            : "(づ•ᴗ•)づᯓ🍕 High on Calories"}
      </p>
      <p>{recipe.isVegan ? "🌱 Vegan" : "🍖 Not Vegan"}</p>
      </Link>
      <button onClick={() => handleDeleteButton(recipe.id)}>🗑</button>
    </div>
    
  );
}

export default RecipeCard;
