import Recipes from "../components/Recipes";

    function MainPage({allRecipes, setAllRecipes}) {


        return(
            <div className = "main-page">
        <h1>Project Recipes</h1>
        <Recipes allRecipes={allRecipes} setAllRecipes={setAllRecipes}/>
    
        <p>Find Your Next Meal</p>
        
        </div>

        );
    }
    export default MainPage;