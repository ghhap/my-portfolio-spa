import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">My Portfolio</div>

      <nav className="nav">
        <NavLink to="/about">Про мене</NavLink>
        <NavLink to="/my-city">Моє місто</NavLink>
        <NavLink to="/my-future">Мій розвиток</NavLink>
      </nav>
    </header>
  )
}

export default Header