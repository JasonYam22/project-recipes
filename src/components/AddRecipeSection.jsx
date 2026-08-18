import { useState } from "react";
import AddRecipeItem from "./AddRecipeItem";

function AddRecipeSection({ allRecipes, setAllRecipes }) {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Add Recipe +</button>

      {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal-content">

      <button onClick={() => setIsModalOpen(false)}>
        X
      </button>

      <h2>Add New Recipe</h2>

      <AddRecipeItem
        allRecipes={allRecipes}
        setAllRecipes={setAllRecipes}
        setIsModalOpen={setIsModalOpen}
      />

    </div>
  </div>
)}

      {isSectionOpen && (
        <AddRecipeItem
          allRecipes={allRecipes}
          setAllRecipes={setAllRecipes}
          setIsSectionOpen={setIsSectionOpen}
        />
      )}
    </>
  );
}

export default AddRecipeSection;
