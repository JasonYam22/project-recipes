import { useParams } from "react-router-dom"
import recipesData from "../assets/Recipe.json"

function ItemDetailsPage(props) {
    
    const params = useParams();
    const id = params.id;
    const recipe = recipesData.find((recipe) => recipe.id === id)
    
    //const foodRecipe = props.allRep    
    
    return(
        <div className = "item-details-page">
            <h1> {recipe.name}</h1>
            <img className= "recipe-image" src={recipe.image} alt={recipe.name}/>
            <ul> {recipe.ingredients.map((ingredients, index) => {return <li key={index}>{ingredients} </li>})}
            </ul>
            <ul> {recipe.recipe.map((recipe, index) => {return <li key={index}>{recipe}</li>})} </ul>
            
        </div>
    )
}

export default ItemDetailsPage;
