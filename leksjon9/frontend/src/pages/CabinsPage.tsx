import { useState, type FormEvent } from "react"
import { Link } from "react-router"
import { categories, regions, type Cabin } from "../data/cabins"
import { useApi } from "../useApi"

const tomtSkjema = {
  name: "",
  kind: categories[0],
  beds: "10",
  region: regions[0],
  description: "",
}

export function CabinsPage() {
  const { data: cabins, error, reload } = useApi<Cabin[]>("/api/cabins")
  const [form, setForm] = useState(tomtSkjema)
  const [feil, setFeil] = useState("")

  async function leggTil(event: FormEvent) {
    event.preventDefault()
    setFeil("")
    const res = await fetch("/api/cabins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (!res.ok) return setFeil("Kunne ikke lagre hytta.")
    setForm(tomtSkjema)
    reload()
  }

  async function slett(id: string) {
    const res = await fetch(`/api/cabins/${id}`, { method: "DELETE" })
    if (!res.ok) return setFeil("Kunne ikke slette hytta.")
    reload()
  }

  return (
    <section className="page-section" aria-labelledby="cabins-title">
      <div className="page-heading">
        <span className="eyebrow">Hytter og overnatting</span>
        <h1 id="cabins-title">Et godt sted å lande.</h1>
        <p>
          På TiUs hytter kan du finne ro, ly for været og en ny start på
          morgendagens tur.
        </p>
      </div>
      {error && <p>Kunne ikke hente hytter.</p>}
      {!cabins && !error && <p>Laster …</p>}
      <div className="cabin-list">
        {cabins?.map((cabin) => (
          <article className="cabin-card" key={cabin.id}>
            <div className="cabin-icon" aria-hidden="true">
              ⌂
            </div>
            <div>
              <div className="card-meta">
                <span>{cabin.kind}</span>
                <span>{cabin.beds} sengeplasser</span>
                <span>{cabin.region}</span>
              </div>
              <h2>{cabin.name}</h2>
              <p>{cabin.description}.</p>
            </div>
            <div className="cabin-actions">
              <Link
                className="text-link"
                to={`/turer?region=${encodeURIComponent(cabin.region)}`}>
                Finn turer i nærheten ↗
              </Link>
              <button
                type="button"
                className="filter-button"
                onClick={() => slett(cabin.id)}>
                Slett
              </button>
            </div>
          </article>
        ))}
      </div>

      <form className="cabin-form" onSubmit={leggTil}>
        <h2>Legg til hytte</h2>
        <input
          required
          placeholder="Navn"
          aria-label="Navn"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <select
          aria-label="Type"
          value={form.kind}
          onChange={(e) => setForm({ ...form, kind: e.target.value as typeof form.kind })}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <input
          required
          type="number"
          min="1"
          aria-label="Sengeplasser"
          value={form.beds}
          onChange={(e) => setForm({ ...form, beds: e.target.value })}
        />
        <select
          aria-label="Område"
          value={form.region}
          onChange={(e) => setForm({ ...form, region: e.target.value })}>
          {regions.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        <input
          required
          placeholder="Beskrivelse"
          aria-label="Beskrivelse"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button type="submit" className="filter-button is-active">
          Legg til
        </button>
        {feil && <p role="alert">{feil}</p>}
      </form>
    </section>
  )
}
