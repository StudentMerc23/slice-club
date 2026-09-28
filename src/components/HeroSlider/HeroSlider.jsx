import { useEffect, useRef, useState } from "react";
import heroImages from "../../data/heroImages";
import "./HeroSlider.css";

const SLIDE_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;

const TRACKPAD_THRESHOLD = 45;
const TRACKPAD_COOLDOWN = 500;

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const pointerStartX = useRef(null);

  // Trackpad swipe
  const trackpadMovement = useRef(0);
  const trackpadLocked = useRef(false);
  const trackpadResetTimer = useRef(null);
  const trackpadLockTimer = useRef(null);

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

  // AUTO SLIDE
  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide();
    }, SLIDE_INTERVAL);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  // CLEAN UP TRACKPAD TIMERS
  useEffect(() => {
    return () => {
      clearTimeout(trackpadResetTimer.current);
      clearTimeout(trackpadLockTimer.current);
    };
  }, []);

  // TOUCH / MOUSE DRAG
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

  // LAPTOP TRACKPAD SWIPE
  const handleTrackpadSwipe = (event) => {
    /*
      Ignore normal vertical scrolling.

      Only react when the gesture is
      primarily horizontal.
    */
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
      return;
    }

    event.preventDefault();

    /*
      Don't allow one trackpad gesture
      to skip through multiple slides.
    */
    if (trackpadLocked.current) {
      return;
    }

    /*
      A trackpad swipe produces many small wheel events,
      so we add them together.
    */
    trackpadMovement.current += event.deltaX;

    /*
      Reset the accumulated movement if the user stops
      swiping for a moment.
    */
    clearTimeout(trackpadResetTimer.current);

    trackpadResetTimer.current = setTimeout(() => {
      trackpadMovement.current = 0;
    }, 150);

    /*
      Swipe left -> next image
    */
    if (trackpadMovement.current >= TRACKPAD_THRESHOLD) {
      nextSlide();

      trackpadMovement.current = 0;
      trackpadLocked.current = true;

      clearTimeout(trackpadLockTimer.current);

      trackpadLockTimer.current = setTimeout(() => {
        trackpadLocked.current = false;
      }, TRACKPAD_COOLDOWN);
    }

    /*
      Swipe right -> previous image
    */
    if (trackpadMovement.current <= -TRACKPAD_THRESHOLD) {
      previousSlide();

      trackpadMovement.current = 0;
      trackpadLocked.current = true;

      clearTimeout(trackpadLockTimer.current);

      trackpadLockTimer.current = setTimeout(() => {
        trackpadLocked.current = false;
      }, TRACKPAD_COOLDOWN);
    }
  };

  return (
    <section
      id="inicio"
      className="hero-slider"
      aria-label="Fotos de Slice Club"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onWheel={handleTrackpadSwipe}
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
