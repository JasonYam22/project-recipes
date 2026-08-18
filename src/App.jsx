import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import recipesJSON from "./assets/Recipe.json"
import { useState } from "react";

function App() {

const [ allRecipes, setAllRecipes ] = useState(recipesJSON)


  return (
    <div className="App">
     <Navbar /> 

      <div className="main-layout">

        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage allRecipes={allRecipes} setAllRecipes={setAllRecipes} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/recipes/:id"element={<ItemDetailsPage allRecipes={allRecipes} />}
/>
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
