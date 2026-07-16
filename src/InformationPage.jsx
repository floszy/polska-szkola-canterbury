import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Arrow } from './components/Arrow'

const QUERY = `{
  "academicYear": *[_type == "academicYear" && isCurrent == true][0]{
    year,
    terms[]{
      name,
      dates
    }
  },
  "fees": *[_type == "feeStructure" && isCurrent == true][0]{
    rows[]{ label, amount },
    note
  },
  "downloads": *[_type == "downloadableFile"] | order(order asc){
    title,
    "url": file.asset->url
  },
  "info": *[_type == "siteInfo"][0]{
    uniformText,
    contactIntro,
    phone,
    email
  }
}`

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' })
}

export function InformationPage({ onNavigate }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    client
      .fetch(QUERY)
      .then((result) => {
        if (!cancelled) setData(result)
      })
      .catch((err) => {
        console.error('Sanity fetch failed:', err)
        if (!cancelled) setError(err)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <Header onNavigate={onNavigate} />

      <section className="info-hero">
        <p className="eyebrow"><span></span> Dla rodziców</p>
        <h1>Wszystko, co<br /><em>warto wiedzieć.</em></h1>
        <p>Najważniejsze informacje o szkole w jednym miejscu.</p>
      </section>

      {error && (
        <section className="section">
          <p>Nie udało się wczytać informacji. Spróbuj odświeżyć stronę.</p>
        </section>
      )}

      {!data && !error && (
        <section className="section">
          <p>Wczytywanie…</p>
        </section>
      )}

      {data && (
        <>
          {data.academicYear && (
            <section className="info-block section" id="dates">
              <div className="section-label">Terminy zajęć</div>
              <div className="info-block-heading">
                <h2>Rok szkolny <em>{data.academicYear.year}</em></h2>
              </div>
              <div className="term-grid">
                {data.academicYear.terms?.map((term, i) => (
                  <div className="term-card" key={i}>
                    <h3>{term.name}</h3>
                    <ul className="term-dates">
                      {term.dates?.map((d, j) => (
                        <li key={j}>{formatDate(d)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.fees && (
            <section className="info-block section" id="fees">
              <div className="section-label">Opłaty</div>
              <div className="info-block-heading">
                <h2>Opłaty za <em>szkołę</em></h2>
              </div>
              <table className="fee-table">
                <tbody>
                  {data.fees.rows?.map((row, i) => (
                    <tr key={i}>
                      <td>{row.label}</td>
                      <td>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {data.fees.note && <p className="fee-note">{data.fees.note}</p>}
            </section>
          )}

          {data.info?.uniformText && (
            <section className="info-block section" id="uniform">
              <div className="section-label">Mundurek</div>
              <div className="info-block-heading">
                <h2>Uniform</h2>
              </div>
              <p>{data.info.uniformText}</p>
            </section>
          )}

          {data.downloads?.length > 0 && (
            <section className="info-block section" id="downloads">
              <div className="section-label">Do pobrania</div>
              <div className="info-block-heading">
                <h2>Przydatne <em>dokumenty</em></h2>
              </div>
              <div className="info-links">
                {data.downloads.map((d, i) => (
                  <a key={i} href={d.url} target="_blank" rel="noreferrer">
                    <span>{d.title}</span>
                    <Arrow />
                  </a>
                ))}
              </div>
            </section>
          )}

          <section className="contact-band">
            <div>
              <span className="section-label">Pytania?</span>
              <h3>{data.info?.contactIntro || 'Skontaktuj się z nami.'}</h3>
            </div>
            <a className="button button-primary" href="https://polskaszkolacanterbury.com/kontakt/" target="_blank" rel="noreferrer">
              Skontaktuj się <Arrow />
            </a>
          </section>
        </>
      )}

      <Footer onNavigate={onNavigate} />
    </>
  )
}

export default InformationPage
