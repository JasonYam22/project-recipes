import Recipes from "../components/Recipes";

    function MainPage({allRecipes, setAllRecipes}) {


        return(
<<<<<<< HEAD
            <div className = "main-page">
        <h1>Project Recipes</h1>
=======
            <main className = "Main-page">
       
>>>>>>> 3a6883c4f334b80aaa8bf52a54e782f1c008d2ff
        <Recipes allRecipes={allRecipes} setAllRecipes={setAllRecipes}/>
    
        <p>Find Your Next Meal</p>
        
        </div>

        );
    }
    export default MainPage;