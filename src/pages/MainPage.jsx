import Recipes from "../components/Recipes";

    function MainPage({allRecipes, setAllRecipes}) {


        return(
            <main className = "Main-page">
       
        <Recipes allRecipes={allRecipes} setAllRecipes={setAllRecipes}/>
    
        <p>Find Your Next Meal</p>
        
        </main>

        );
    }
    export default MainPage;