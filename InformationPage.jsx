import { Header } from './src/components/Header'
import { Footer } from './src/components/Footer'
import { Arrow } from './src/components/Arrow'

const pageData = {
  academicYear: {
    year: '2026/2027',
    terms: [
      {
        name: 'Zajęcia tygodniowe',
        dates: ['Poniedziałek 09:00-15:00', 'Środa 09:00-15:00', 'Piątek 09:00-13:00']
      },
      {
        name: 'Zajęcia dodatkowe',
        dates: ['Wtorek 10:00-12:00', 'Czwartek 10:00-12:00']
      }
    ]
  },
  fees: {
    rows: [
      { label: 'Opłata miesięczna', amount: '800 zł' },
      { label: 'Opłata rejestracyjna', amount: '200 zł' }
    ],
    note: 'Opłaty są aktualizowane co miesiąc i mogą ulec zmianie w zależności od planu zajęć.'
  },
  downloads: [
    { title: 'Regulamin szkoły', url: '#' },
    { title: 'Formularz zgłoszenia', url: '#' }
  ],
  info: {
    uniformText: 'Dzieci uczęszczające do szkoły powinny mieć wygodny strój szkolny oraz obuwie zaprojektowane do aktywnego dnia.',
    contactIntro: 'Jeśli masz pytania lub chcesz zapisać dziecko na zajęcia, skontaktuj się z nami.',
    phone: '+64 27 123 456',
    email: 'kontakt@polskaszkolacanterbury.com'
  }
}

export function InformationPage({ onNavigate }) {
  return (
    <>
      <Header onNavigate={onNavigate} />

      <section className="info-hero">
        <p className="eyebrow"><span></span> Dla rodziców</p>
        <h1>Wszystko, co<br /><em>warto wiedzieć.</em></h1>
        <p>Najważniejsze informacje o szkole w jednym miejscu.</p>
      </section>

      <section className="info-block section" id="dates">
        <div className="section-label">Terminy zajęć</div>
        <div className="info-block-heading">
          <h2>Rok szkolny <em>{pageData.academicYear.year}</em></h2>
        </div>
        <div className="term-grid">
          {pageData.academicYear.terms.map((term, i) => (
            <div className="term-card" key={i}>
              <h3>{term.name}</h3>
              <ul className="term-dates">
                {term.dates.map((date, j) => (
                  <li key={j}>{date}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="info-block section" id="fees">
        <div className="section-label">Opłaty</div>
        <div className="info-block-heading">
          <h2>Opłaty za <em>szkołę</em></h2>
        </div>
        <table className="fee-table">
          <tbody>
            {pageData.fees.rows.map((row, i) => (
              <tr key={i}>
                <td>{row.label}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="fee-note">{pageData.fees.note}</p>
      </section>

      <section className="info-block section" id="uniform">
        <div className="section-label">Mundurek</div>
        <div className="info-block-heading">
          <h2>Uniform</h2>
        </div>
        <p>{pageData.info.uniformText}</p>
      </section>

      <section className="info-block section" id="downloads">
        <div className="section-label">Do pobrania</div>
        <div className="info-block-heading">
          <h2>Przydatne <em>dokumenty</em></h2>
        </div>
        <div className="info-links">
          {pageData.downloads.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noreferrer">
              <span>{item.title}</span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="contact-band">
        <div>
          <span className="section-label">Pytania?</span>
          <h3>{pageData.info.contactIntro}</h3>
          <p>{pageData.info.phone}</p>
          <p>{pageData.info.email}</p>
        </div>
        <a className="button button-primary" href="https://polskaszkolacanterbury.com/kontakt/" target="_blank" rel="noreferrer">
          Skontaktuj się <Arrow />
        </a>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  )
}

export default InformationPage
