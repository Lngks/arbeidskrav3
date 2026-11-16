import { Link } from "react-router"
import type { Cabin } from "../data/cabins"
import type { Hike } from "../data/utopia"
import { useApi } from "../useApi"
import { HikeCard } from "../components/HikeCard"
import { SectionHeading } from "../components/SectionHeading"

export function HomePage() {
  const { data: hikes } = useApi<Hike[]>("/api/hikes")
  const { data: cabins } = useApi<Cabin[]>("/api/cabins")

  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> Turistforeningen i Utopia
          </span>
          <h1 id="hero-title">
            Finn veien til <em>nye opplevelser.</em>
          </h1>
          <p>Utforsk turer, turmål og hytter for alle som liker å være ute.</p>
          <div className="hero-actions">
            <Link className="primary-button" to="/turer">
              Utforsk turer <span aria-hidden="true">↗</span>
            </Link>
            <Link className="secondary-button" to="/hytter">
              Se hytter
            </Link>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Fjellandskap i Utopia">
          <span>
            Små steg.
            <br />
            <strong>Store utsikter.</strong>
          </span>
        </div>
      </section>

      <section className="section featured-section" aria-labelledby="featured-title">
        <SectionHeading
          id="featured-title"
          eyebrow="Utvalgt akkurat nå"
          title="Tre turer å glede seg til."
          linkTo="/turer"
          linkText="Se alle turer"
        />
        <div className="card-grid">
          {hikes?.slice(0, 3).map((hike) => (
            <HikeCard key={hike.id} hike={hike} />
          ))}
        </div>
      </section>

      <section className="section green-section" aria-labelledby="cabin-preview-title">
        <SectionHeading
          id="cabin-preview-title"
          eyebrow="Overnatting"
          title="Sov godt underveis."
          linkTo="/hytter"
          linkText="Utforsk hytter"
          light
        />
        <div className="cabin-preview">
          <div>
            <p>
              Gjør turen litt lengre med en natt på en av TiUs hytter. Her
              finner du steder å lande, lage mat og dele dagens beste utsikt.
            </p>
            <Link className="text-link light-link" to="/hytter">
              Finn din neste hytte ↗
            </Link>
          </div>
          <div className="cabin-stats">
            <strong>{cabins?.length ?? "–"}</strong>
            <span>
              hytter klare
              <br />
              for nye turer
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
