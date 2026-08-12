/*import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";*/
import Recipes from "./components/Recipes";
import RecipeCard from "./components/RecipeCard";
import "./App.css";

function App() {
  return (
    <div className="navbar-container">
     
      <div className="main-layout">
       
        <main className="content">
          <h1>Welcome to the project RECIPE</h1>
          <Recipes/>
        </main>
      </div>
     
    </div>
  );
}
export default App;
