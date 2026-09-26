import { useEffect, useRef, useState } from "react";
import heroImages from "../../data/heroImages";
import "./HeroSlider.css";

const SLIDE_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const pointerStartX = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === heroImages.length - 1 ? 0 : previousSlide + 1,
    );
  };

  const previousSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0 ? heroImages.length - 1 : previousSlide - 1,
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide();
    }, SLIDE_INTERVAL);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const handlePointerDown = (event) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (pointerStartX.current === null) return;

    const pointerEndX = event.clientX;
    const movement = pointerEndX - pointerStartX.current;

    /*
      If the user dragged/swiped far enough,
      use the direction of the movement.
    */
    if (Math.abs(movement) >= SWIPE_THRESHOLD) {
      if (movement < 0) {
        nextSlide();
      } else {
        previousSlide();
      }

      pointerStartX.current = null;
      return;
    }

    /*
      For mouse users:
      clicking the left half goes backward,
      clicking the right half goes forward.
    */
    if (event.pointerType === "mouse") {
      const slider = event.currentTarget.getBoundingClientRect();
      const clickPosition = event.clientX - slider.left;

      if (clickPosition < slider.width / 2) {
        previousSlide();
      } else {
        nextSlide();
      }
    }

    pointerStartX.current = null;
  };

  return (
    <section
      id="inicio"
      className="hero-slider"
      aria-label="Fotos de Slice Club"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div
        className="hero-slider__track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {heroImages.map((image) => (
          <div className="hero-slider__slide" key={image.id}>
            <img src={image.src} alt={image.alt} draggable="false" />
          </div>
        ))}
      </div>

      <div className="hero-slider__dots">
        {heroImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`hero-slider__dot ${
              index === currentSlide ? "hero-slider__dot--active" : ""
            }`}
            onClick={(event) => {
              event.stopPropagation();
              setCurrentSlide(index);
            }}
            aria-label={`Mostrar imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
