export function AboutPage() {
  return (
    <section className="page-section about-page" aria-labelledby="about-title">
      <div className="page-heading">
        <span className="eyebrow">Om TiU</span>
        <h1 id="about-title">Vi gjør det enklere å komme seg ut.</h1>
        <p>
          Turistforeningen i Utopia samler informasjon om turer, turmål og
          hytter, slik at flere kan oppdage naturen på sin egen måte.
        </p>
      </div>
      <div className="about-grid">
        <div>
          <h2>For små og store eventyr</h2>
          <p>
            Du trenger ikke være ekspert for å dra på tur. Vi tror på tydelig
            informasjon, gode råd og terskelfrie opplevelser. Start med en tur
            som føles riktig i dag.
          </p>
        </div>
        <div>
          <h2>Ta vare på Utopia</h2>
          <p>
            Vis hensyn til naturen, følg merkede stier og legg igjen stedet
            slik du fant det. Den beste turen er den som også er god for dem
            som kommer etter deg.
          </p>
        </div>
        <div>
          <h2>Praktisk informasjon</h2>
          <p>
            Dette er en skoleoppgave med fiktive steder og dummydata.
            Informasjonen på siden skal derfor ikke brukes som faktisk
            turplanlegging.
          </p>
        </div>
      </div>
    </section>
  )
}
