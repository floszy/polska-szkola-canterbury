import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NavLink } from './components/NavLink'
import { Arrow } from './components/Arrow'


function AboutPage({ onNavigate }) {
  return <>
    <Header onNavigate={onNavigate} />
    <section className="about-hero"><div><p className="eyebrow"><span></span> Poznaj nas</p><h1>Szkoła z sercem,<br /><em>korzeniami</em><br />i przyszłością.</h1><p>Od 2010 roku tworzymy w Canterbury miejsce, w którym język polski łączy dzieci, rodziny i pokolenia.</p></div><div className="about-hero-image" role="img" aria-label="Children learning together"></div></section>
    <section className="about-content section"><div className="section-label">01 / Nasza szkoła</div><div className="about-intro"><h2>Wielka edukacja<br />zaczyna się od<br /><em>małej klasy.</em></h2><div><p>Pracujemy stacjonarnie i przyjmujemy dzieci od 4. roku życia. Ponieważ zależy nam na uważnej, indywidualnej pracy, liczba miejsc w klasach jest ograniczona.</p><a className="button button-primary" href="https://polskaszkolacanterbury.com/kontakt/" target="_blank" rel="noreferrer">Informacje o zapisach <Arrow /></a></div></div><div className="notice"><span>Ważne</span><p>W 2020 roku, gdy sytuacja tego wymagała, sprawnie przenieśliśmy zajęcia do internetu. To doświadczenie pokazało nam, że niezależnie od formy, najważniejsze pozostają relacje, wspólna ciekawość i dobry kontakt z dzieckiem.</p><a href="https://polskaszkolacanterbury.com/blog/" target="_blank" rel="noreferrer">Przeczytaj relację z pierwszych zajęć online <Arrow /></a></div></section>
    <section className="about-story"><div className="about-story-image" role="img" aria-label="Child reading a book"></div><div className="about-story-copy"><div className="section-label light">02 / Jak uczymy</div><h2>Język, który<br />otwiera <em>świat.</em></h2><p>Nasze autorskie programy rozwijają wszystkie kompetencje językowe — od czytania i pisania po pewność w rozmowie. Czerpiemy z najlepszych metod polskiej i brytyjskiej edukacji, a naukę łączymy z ruchem, projektem i działaniem.</p><div className="about-pill-list"><span>Drama i opowiadanie</span><span>Projekty i lapbooki</span><span>Plastyka i kultura</span><span>Nowe technologie</span></div></div></section>
    <section className="about-community section"><div className="section-label">03 / Wspólnota</div><div className="about-intro"><h2>Jesteśmy razem<br />dla <em>dzieci.</em></h2><div><p>Polska Szkoła to więcej niż sobotnie zajęcia. Tworzymy żywą społeczność: wymieniamy się doświadczeniami, spotykamy na wydarzeniach rodzinnych i wspólnie dbamy o polskie tradycje.</p><p>Uczymy dumy z języka i własnych korzeni, a jednocześnie pokazujemy dzieciom wartość życia w wielokulturowej Wielkiej Brytanii. Bo dwujęzyczność to dar, który zostaje na całe życie.</p></div></div><blockquote>„Celem naczelnym jest<br /><strong>szczęśliwe dziecko.</strong>”</blockquote><div className="contact-band"><div><span className="section-label">Zapisy i pytania</span><h3>Porozmawiajmy<br />o Twoim dziecku.</h3></div><a className="button button-primary" href="https://polskaszkolacanterbury.com/kontakt/" target="_blank" rel="noreferrer">Skontaktuj się z dyrektorem <Arrow /></a></div></section>
    <Footer />
  </>
}

function App() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => { const updatePath = () => setPath(window.location.pathname); window.addEventListener('popstate', updatePath); return () => window.removeEventListener('popstate', updatePath) }, [])
  if (path === '/o-nas') return <AboutPage onNavigate={setPath} />
 return (
    <main>
      <Header onNavigate={setPath} />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Sobota 9:00–12:00 · Canterbury</p>
          <h1>Polskie korzenie.<br /><em>Wielkie</em> skrzydła.</h1>
          <p className="hero-text">Przyjazna sobotnia szkoła dla dzieci od 4. roku życia — uczymy języka, historii i kultury Polski w twórczy sposób.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://polskaszkolacanterbury.com/kontakt/" target="_blank" rel="noreferrer">Zapisz swoje dziecko <Arrow /></a>
            <NavLink className="text-link" to="/o-nas" onNavigate={setPath}>Poznaj nas <Arrow /></NavLink>
          </div>
          <div className="hero-footnote"><b>2010</b><span>Rok założenia<br />naszej szkoły</span></div>
        </div>
        <div className="hero-visual">
          <div className="red-disc"></div>
          <div className="hero-image" role="img" aria-label="Children learning together"></div>
          <div className="quote-card"><span className="quote-icon">“</span><p>Najważniejsze jest<br /><strong>szczęśliwe dziecko.</strong></p></div>
          <div className="flower flower-one">✦</div><div className="flower flower-two">✦</div>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="section-label">01 / O nas</div>
        <div className="intro-content">
          <h2>Tu język polski<br />staje się <em>domem.</em></h2>
          <div>
            <p>Jesteśmy społecznością polskich rodzin w Canterbury. Od ponad dekady pomagamy dzieciom rozwijać dwujęzyczność, pewność siebie i więź z polską kulturą.</p>
            <NavLink className="text-link red" to="/o-nas" onNavigate={setPath}>Dowiedz się więcej <Arrow /></NavLink>
          </div>
        </div>
        <div className="values-grid">
          <article><span className="number">01</span><h3>Małe klasy</h3><p>Uważnie słuchamy potrzeb każdego dziecka.</p></article>
          <article><span className="number">02</span><h3>Twórcza nauka</h3><p>Drama, projekty, plastyka i nowoczesne metody.</p></article>
          <article><span className="number">03</span><h3>Wspólnota</h3><p>Razem pielęgnujemy język, tradycje i przyjaźnie.</p></article>
        </div>
      </section>

      <section className="learning" id="learning">
        <div className="learning-image" role="img" aria-label="Child painting during a classroom activity"></div>
        <div className="learning-copy">
          <div className="section-label light">02 / Jak uczymy</div>
          <h2>Więcej niż<br /><em>lekcje.</em></h2>
          <p>Łączymy autorskie programy z nauką przez działanie. Dzieci czytają, piszą, tworzą, rozmawiają i odkrywają historię Polski po swojemu.</p>
          <ul>
            <li><span>✦</span> Język polski i literatura</li>
            <li><span>✦</span> Historia, geografia i kultura</li>
            <li><span>✦</span> Zajęcia artystyczne i projekty</li>
          </ul>
        </div>
      </section>

      <section className="info section" id="info">
        <div className="section-label">03 / Informacje</div>
        <div className="info-heading"><h2>Wszystko, co<br />warto <em>wiedzieć.</em></h2><p>Najważniejsze informacje dla rodziców w jednym miejscu.</p></div>
        <div className="info-links">
          <NavLink to="#enrol" onNavigate={setPath}><span>Zapisy do szkoły</span><b>01</b><Arrow /></NavLink>
          <a href="https://polskaszkolacanterbury.com/informacje-ogolne/" target="_blank" rel="noreferrer"><span>Daty zajęć</span><b>02</b><Arrow /></a>
          <a href="https://polskaszkolacanterbury.com/informacje-ogolne/" target="_blank" rel="noreferrer"><span>Opłaty za szkołę</span><b>03</b><Arrow /></a>
          <NavLink to="#contact" onNavigate={setPath}><span>Poznaj naszą kadrę</span><b>04</b><Arrow /></NavLink>
        </div>
      </section>

      <section className="enrol" id="enrol">
        <div className="enrol-stamp">Polska<br />Szkoła<br /><span>Canterbury</span></div>
        <div><p className="eyebrow"><span></span> Dołącz do nas</p><h2>Wychowujmy<br /><em>dwujęzycznie.</em></h2><p>Chętnie opowiemy o klasach i wolnych miejscach. Napisz lub zadzwoń do nas.</p><a className="button button-dark" href="https://polskaszkolacanterbury.com/kontakt/" target="_blank" rel="noreferrer">Skontaktuj się <Arrow /></a></div>
        <div className="enrol-sun">●</div>
      </section>

      <Footer onNavigate={setPath} />
    </main>
  )
}

export default App
