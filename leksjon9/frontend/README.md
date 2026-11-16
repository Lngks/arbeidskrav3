# Turistforeningen i Utopia

## Innhold

- Landingsside med hero-seksjon og utvalgte turer
- Turside med søk og filtrering på vanskelighetsgrad
- Turmål med dummydata for ulike områder i Utopia
- Hytteoversikt med type og antall sengeplasser
- React Router-navigasjon mellom sidene

## Ruter

Navigasjonen bruker React Router med `BrowserRouter`:

- `/` – hjem
- `/turer` – turer
- `/turmal` – turmål
- `/hytter` – hytter og overnatting
- `/om` – om TiU

All innhold er lokal dummydata i `src/data/utopia.ts` og `src/data/cabins.ts`.
