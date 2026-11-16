import { Link } from "react-router"

type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  linkTo: string
  linkText: string
  light?: boolean
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  linkTo,
  linkText,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={light ? "section-heading light-heading" : "section-heading"}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id}>{title}</h2>
      </div>
      <Link className="text-link" to={linkTo}>
        {linkText} ↗
      </Link>
    </div>
  )
}
