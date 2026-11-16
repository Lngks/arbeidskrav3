import { Link, NavLink } from "react-router"
import { pageLinks } from "./Navigation"

export function Header() {
  return (
    <>
      <div className="topline">
        <span>Ut på tur i Utopia</span>
        <span>For alle som liker å være ute</span>
      </div>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="TiU, hjem">
          <span className="wordmark-mark">TiU</span>
          <span className="wordmark-name">
            Turistforeningen i Utopia
            <small>Finn veien ut</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Hovednavigasjon">
          {pageLinks.map((link) => (
            <NavLink
              key={link.page}
              to={link.path}
              end={link.page === "home"}
              className={({ isActive }) => (isActive ? "is-active" : "")}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
    </>
  )
}
