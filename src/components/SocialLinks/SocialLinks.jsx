import "./SocialLinks.css";

function SocialLinks() {
  return (
    <section id="social" className="social-links">
      <h2 className="social-links__title">SIGUE EL SLICE</h2>

      <div className="social-links__icons">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/elsliceclub/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__link"
          aria-label="Instagram de Slice Club"
        >
          <svg
            viewBox="0 0 24 24"
            className="social-links__icon"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>

          <span>Instagram</span>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@elsliceclub"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__link"
          aria-label="TikTok de Slice Club"
        >
          <svg
            viewBox="0 0 24 24"
            className="social-links__icon"
            aria-hidden="true"
          >
            <path
              d="M14 4v10.2a4.2 4.2 0 1 1-3.2-4.1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M14 4c.8 2.6 2.5 4.1 5 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span>TikTok</span>
        </a>
      </div>

      <p className="social-links__username">@elsliceclub</p>

      <div className="social-links__contact">
        <span className="social-links__contact-title">CONTACTO</span>

        <a href="mailto:elsliceclub@gmail.com" className="social-links__email">
          elsliceclub@gmail.com
        </a>
      </div>
    </section>
  );
}

export default SocialLinks;
