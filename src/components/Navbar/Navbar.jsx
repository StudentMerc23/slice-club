import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logos/slice-club-beige.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="navbar">
        <div className="navbar__content">
          <button
            className="navbar__menu"
            type="button"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <img className="navbar__logo" src={logo} alt="Slice Club" />
        </div>
      </header>

      <div
        className={`nav-overlay ${menuOpen ? "nav-overlay--visible" : ""}`}
        onClick={closeMenu}
      />

      <aside
        className={`nav-drawer ${menuOpen ? "nav-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav-drawer__header">
          <img className="nav-drawer__logo" src={logo} alt="Slice Club" />

          <button
            className="nav-drawer__close"
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="nav-drawer__links">
          <a href="#inicio" onClick={closeMenu}>
            INICIO
          </a>

          <a href="#about" onClick={closeMenu}>
            DETRÁS DEL SLICE
          </a>

          <a href="#members" onClick={closeMenu}>
            LOS DEL SLICE
          </a>

          <a href="#latest" onClick={closeMenu}>
            LO ÚLTIMO
          </a>

          <a href="#where-we-play" onClick={closeMenu}>
            ¿DÓNDE JUGAMOS?
          </a>

          <a href="#social" onClick={closeMenu}>
            SÍGUENOS / CONTACTO
          </a>
        </nav>

        <p className="nav-drawer__username">@elsliceclub</p>
      </aside>
    </>
  );
}

export default Navbar;
