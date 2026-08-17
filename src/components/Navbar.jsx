import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <nav>
       <h1 className="titleNav">Project Recipes</h1>
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