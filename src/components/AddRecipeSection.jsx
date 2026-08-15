import {useState} from "react"
import AddRecipeItem from "./AddRecipeItem"


function AddRecipeSection({allRecipes, setAllRecipes}) {
const [isSectionOpen, setIsSectionOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsSectionOpen(!isSectionOpen)}> Add new recipe +</button>

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