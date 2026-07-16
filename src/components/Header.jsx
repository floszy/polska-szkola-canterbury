import { useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from './NavLink'
import { Arrow } from './Arrow'

export function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" onNavigate={onNavigate} onNavigateComplete={closeMenu} aria-label="Polska Szkoła Canterbury — home">
        <img className="brand-logo" src={logo} alt="Polska Szkoła Canterbury" />
        <span><strong>Polska Szkoła</strong><small>Canterbury</small></span>
      </NavLink>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span></span><span></span><span></span></button>
      <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Main navigation">
        <NavLink to="/o-nas" onNavigate={onNavigate} onNavigateComplete={closeMenu}>O nas</NavLink>
        <NavLink to="/#learning" onNavigate={onNavigate} onNavigateComplete={closeMenu}>Nauka</NavLink>
        <a href="https://polskaszkolacanterbury.com/informacje-ogolne/" target="_blank" rel="noreferrer" onClick={closeMenu}>Informacje</a>
        <NavLink to="/#contact" onNavigate={onNavigate} onNavigateComplete={closeMenu}>Kontakt</NavLink>
        <a className="nav-cta" href="https://polskaszkolacanterbury.com/kontakt/" target="_blank" rel="noreferrer" onClick={closeMenu}>Zapisy <Arrow /></a>
      </nav>
    </header>
  )
}

export default Header
