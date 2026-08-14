import { useParams } from "react-router-dom"

function ItemDetailsPage(props) {

    const {id} = useParams();
    const recipe = props.allRecipes.find((recipe) => recipe.id === id)
    if (!recipe) {
        return <p>Recipe not found</p>;
}  
    
    return(
        <div className = "item-details-page">
            <h1> {recipe.name}</h1>
            <img className= "recipe-image" src={recipe.image} alt={recipe.name}/>
            <ul> {recipe.ingredients.map((ingredient, id) => {return <li key={id}>{ingredient} </li>})}
            </ul>
            <ul> {recipe.recipe.map((step, id) => {return <li key={id}>{step}</li>})} </ul>
            
        </div>
    )
}

export default ItemDetailsPage;
