
function RecipeCard({recipe, handleDeleteButton}) {
    return(
        <div className="Recipe" key={recipe.id}>
            <img src = {recipe.image} alt={recipe.name}/>
            <h1>{recipe.name}</h1>
            <p>{recipe.calories}</p>
            <p>{recipe.calories <= 500 ? "ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧ Low Calories" : recipe.calories <=700 ? "🍲Normal Calories" : "(づ•ᴗ•)づᯓ🍕 High on Calories"}</p>
            <p>{recipe.isVegan ? "🌱 Vegan" : "🍖 Not Vegan"}</p>
            <button onClick={() => handleDeleteButton(recipe.id)}>Delete</button>  
          </div>

    )
}

export default RecipeCard