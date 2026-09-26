import "./Footer.css";
import logo from "../../assets/logos/slice-club-beige.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Slice Club" />

      <p className="footer__copyright">
        © 2026 Slice Club. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
