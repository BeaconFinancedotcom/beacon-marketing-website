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

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">

        <Link
          to="/"
          className="header-brand"
          onClick={closeMenu}
          aria-label="Beacon — Home"
        >
          <span className="brand-emblem" aria-hidden="true">
            <img
              src="/images/beacon/beacon_logo_official.png"
              alt=""
              className="brand-emblem-image"
            />
          </span>

          <span className="brand-wordmark">
            Beacon
          </span>
        </Link>

        <nav
          className={`header-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
          id="beacon-main-navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="header-signin"
          href="https://beta.getbeaconfinance.com/login"
          aria-label="Sign in to Beacon"
        >
          Sign In
          <ArrowUpRight size={14} />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation'
              : 'Open navigation'
          }
          aria-expanded={menuOpen}
          aria-controls="beacon-main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>
    </header>
  )
}