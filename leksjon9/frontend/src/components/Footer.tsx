import { Link } from "react-router"

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>TiU</strong>
        <span>Turistforeningen i Utopia</span>
      </div>
      <span>Et undervisningsprosjekt med dummydata</span>
      <Link to="/">Til toppen ↑</Link>
    </footer>
  )
}
