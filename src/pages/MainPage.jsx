import Recipes from "../components/Recipes";

    function MainPage({allRecipes, setAllRecipes}) {


        return(
            <div className = "Main-page">
       

        <Recipes allRecipes={allRecipes} setAllRecipes={setAllRecipes}/>
    
        <p>Find Your Next Meal</p>
        
        </div>

        );
    }
    export default MainPage;