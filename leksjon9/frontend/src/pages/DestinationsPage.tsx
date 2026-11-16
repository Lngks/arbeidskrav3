import { Link } from "react-router"
import type { Destination } from "../data/utopia"
import { useApi } from "../useApi"

export function DestinationsPage() {
  const { data: destinations, error } = useApi<Destination[]>("/api/destinations")

  return (
    <section className="page-section" aria-labelledby="destinations-title">
      <div className="page-heading">
        <span className="eyebrow">Turmål</span>
        <h1 id="destinations-title">Steder det er godt å være.</h1>
        <p>
          Utopia er fullt av kontraster. Finn området som passer for ditt neste
          eventyr.
        </p>
      </div>
      {error && <p>Kunne ikke hente turmål.</p>}
      {!destinations && !error && <p>Laster …</p>}
      <div className="card-grid">
        {destinations?.map((destination) => (
          <article className="info-card" key={destination.id}>
            <img src={destination.image} alt={destination.alt} loading="lazy" />
            <div className="card-body">
              <div className="card-meta">
                <span>{destination.region}</span>
                <span>Turmål</span>
              </div>
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
              <div className="card-details">
                <span>{destination.highlights}</span>
              </div>
              <Link
                className="text-link"
                to={`/turer?region=${encodeURIComponent(destination.name)}`}>
                Se turer i området ↗
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
