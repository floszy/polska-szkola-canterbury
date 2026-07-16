import { NavLink } from './NavLink'

export function Footer({ onNavigate }) {
  return <footer id="contact">
    <div className="footer-top"><NavLink className="brand brand-footer" to="/" onNavigate={onNavigate}><span className="brand-mark"><i></i><b></b></span><span><strong>Polska Szkoła</strong><small>Canterbury</small></span></NavLink><p>Uczymy z sercem.<br />Od pokoleń, dla przyszłości.</p></div>
    <div className="footer-grid"><div><span className="footer-label">Gdzie jesteśmy</span><p>St Stephen's Junior School<br />Hales Drive, Canterbury<br />CT2 7AD</p></div><div><span className="footer-label">Kiedy</span><p>Soboty<br />9:00–12:00</p></div><div><span className="footer-label">Kontakt</span><p><a href="tel:07878957519">07878 957 519</a><br /><a href="https://www.facebook.com/PolskaSzkolaCanterbury/" target="_blank" rel="noreferrer">Facebook</a></p></div></div>
    <div className="footer-bottom"><span>© Polska Szkoła im. J. C. Korzeniowskiego w Canterbury</span><NavLink to="#top" onNavigate={onNavigate}>Na górę ↑</NavLink></div>
  </footer>
}

export default Footer
