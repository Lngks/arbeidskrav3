import { Link } from "react-router"
import type { Hike } from "../data/utopia"

export function HikeCard({ hike }: { hike: Hike }) {
  return (
    <article className="info-card">
      <img src={hike.image} alt={hike.alt} loading="lazy" />
      <div className="card-body">
        <div className="card-meta">
          <span>{hike.region}</span>
          <span>{hike.difficulty}</span>
        </div>
        <h2>{hike.name}</h2>
        <p>{hike.description}</p>
        <div className="card-details">
          <span>{hike.distance}</span>
          <span>{hike.duration}</span>
          <span>{hike.season}</span>
        </div>
        <Link className="text-link" to={`/turer/${hike.id}`}>
          Les mer om turen ↗
        </Link>
      </div>
    </article>
  )
}
