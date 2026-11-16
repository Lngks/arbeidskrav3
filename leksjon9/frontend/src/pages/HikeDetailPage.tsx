import { Link, useParams } from "react-router"
import type { HikeDetails } from "../data/utopia"
import { useApi } from "../useApi"

export function HikeDetailPage() {
  const { id } = useParams()
  const { data: hike, error } = useApi<HikeDetails>(`/api/hikes/${id}`)

  if (error) {
    return (
      <section className="page-section">
        <div className="empty-state">
          <strong>Fant ikke turen.</strong>
          <Link className="text-link" to="/turer">
            Tilbake til alle turer
          </Link>
        </div>
      </section>
    )
  }

  if (!hike) {
    return (
      <section className="page-section">
        <p>Laster …</p>
      </section>
    )
  }

  return (
    <section className="page-section hike-detail" aria-labelledby="hike-title">
      <Link className="text-link" to="/turer">
        ← Alle turer
      </Link>
      <div className="page-heading">
        <span className="eyebrow">
          {hike.region} · {hike.difficulty}
        </span>
        <h1 id="hike-title">{hike.name}</h1>
        <p>{hike.description}</p>
      </div>

      <img className="hike-hero" src={hike.image} alt={hike.alt} />

      <dl className="hike-facts">
        <div>
          <dt>Distanse</dt>
          <dd>{hike.distance}</dd>
        </div>
        <div>
          <dt>Varighet</dt>
          <dd>{hike.duration}</dd>
        </div>
        <div>
          <dt>Stigning</dt>
          <dd>{hike.elevation}</dd>
        </div>
        <div>
          <dt>Sesong</dt>
          <dd>{hike.season}</dd>
        </div>
      </dl>

      <div className="hike-body">
        <div>
          <h2>Om turen</h2>
          <p>{hike.longDescription}</p>
          <h2>Utgangspunkt</h2>
          <p>{hike.start}</p>
        </div>
        <div>
          <h2>Høydepunkter</h2>
          <ul>
            {hike.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Tips</h2>
          <p>{hike.tips}</p>
        </div>
      </div>

      <Link className="text-link" to={`/turer?region=${encodeURIComponent(hike.region)}`}>
        Flere turer i {hike.region} ↗
      </Link>
    </section>
  )
}
