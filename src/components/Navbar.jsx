import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <nav>
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