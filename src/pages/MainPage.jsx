
import Recipes from "../components/Recipes"

    function MainPage({allRecipes, setAllRecipes, query}) {

        return(
            <div className = "Main-page">
        <Recipes allRecipes={allRecipes} setAllRecipes={setAllRecipes} query={query}/>
    
        <p>Find Your Next Meal</p>
        
        </div>

        );
    }
    export default MainPage;