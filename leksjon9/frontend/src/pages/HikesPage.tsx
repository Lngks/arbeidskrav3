import { useState } from "react"
import { Link, useSearchParams } from "react-router"
import { HikeCard } from "../components/HikeCard"
import type { Difficulty, Hike } from "../data/utopia"
import { useApi } from "../useApi"

const difficulties: Array<Difficulty | "Alle"> = [
  "Alle",
  "Enkel",
  "Middels",
  "Krevende",
]

export function HikesPage() {
  const [query, setQuery] = useState("")
  const [difficulty, setDifficulty] = useState<Difficulty | "Alle">("Alle")

  const region = useSearchParams()[0].get("region")

  const params = new URLSearchParams({ q: query.trim() })
  if (difficulty !== "Alle") params.set("difficulty", difficulty)
  if (region) params.set("region", region)
  const { data: hikes, error } = useApi<Hike[]>(`/api/hikes?${params}`)

  return (
    <section className="page-section" aria-labelledby="listing-title">
      <div className="page-heading">
        <span className="eyebrow">Turer</span>
        <h1 id="listing-title">Finn turen som passer deg.</h1>
        <p>
          Fra korte skogsturer til lange fjelldager. Bruk filtrene for å finne
          et godt sted å begynne.
        </p>
      </div>
      {region && (
        <p>
          Viser turer i {region}.{" "}
          <Link className="text-link" to="/turer">
            Vis alle
          </Link>
        </p>
      )}
      <div className="filters" aria-label="Filtrer turer">
        <label className="search-field">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Søk etter tur eller område"
            aria-label="Søk etter tur eller område"
          />
        </label>
        <div className="filter-buttons" aria-label="Vanskelighetsgrad">
          {difficulties.map((item) => (
            <button
              key={item}
              className={difficulty === item ? "filter-button is-active" : "filter-button"}
              onClick={() => setDifficulty(item)}
              aria-pressed={difficulty === item}>
              {item}
            </button>
          ))}
        </div>
      </div>
      {error ? (
        <div className="empty-state">
          <strong>Kunne ikke hente turer.</strong>
        </div>
      ) : !hikes ? (
        <p>Laster …</p>
      ) : hikes.length > 0 ? (
        <div className="card-grid">
          {hikes.map((hike) => (
            <HikeCard key={hike.id} hike={hike} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <strong>Ingen turer funnet.</strong>
          <span>Prøv et annet søk eller velg «Alle».</span>
        </div>
      )}
    </section>
  )
}
