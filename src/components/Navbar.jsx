import { Link } from "react-router-dom"
import { useState } from "react"
import SearchBar from "./SearchBar"

function Navbar({query, setQuery}) {

  const [menuOpen,setMenuOpen] = useState(false)
 const handleSearch = (e) => {
setQuery(e.target.value);
 }

  return (
    <nav>
        <Link to="/" className="titleNav">Project Recipes</Link>
        
        <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={handleSearch}
      />

      <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      {menuOpen && (
        <div>
      <Link to="/">Home Page</Link>
      <br />
      <Link to="/about">About</Link>
      </div>
      )}
    
    </nav>
  )
}
export default Navbar