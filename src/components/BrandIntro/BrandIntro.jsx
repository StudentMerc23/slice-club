import "./BrandIntro.css";

import greenLogo from "../../assets/logos/slice-club-green.png";

function BrandIntro() {
  return (
    <section className="brand-intro">
      <svg
        className="brand-intro__slogan"
        viewBox="0 0 194 36"
        aria-label="Jugamos el slice, no lo arreglamos"
      >
        <defs>
          <path id="slogan-curve" d="M 7 29 Q 97 -2 187 29" />
        </defs>

        <text className="brand-intro__slogan-text">
          <textPath href="#slogan-curve" startOffset="50%" textAnchor="middle">
            Jugamos el slice, no lo arreglamos
          </textPath>
        </text>
      </svg>

      <img className="brand-intro__logo" src={greenLogo} alt="Slice Club" />
    </section>
  );
}

export default BrandIntro;
