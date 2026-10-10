import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Header.css'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'How Beacon Works', path: '/how-beacon-works' },
  { label: 'Education', path: '/education' },
  { label: 'Downloads', path: '/downloads' },
  { label: 'About', path: '/about' },
  { label: 'Support Beacon', path: '/support' },
  { label: 'Contact', path: '/contact' },
  { label: 'Forge', path: '/forge' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="header-brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-symbol">✦</span>
          <span>Beacon</span>
        </Link>

        <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="header-signin"
          href="#"
          onClick={(event) => event.preventDefault()}
          title="Beacon Web app sign-in will be connected when publicly available"
        >
          Sign In <ArrowUpRight size={14} />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  )
}