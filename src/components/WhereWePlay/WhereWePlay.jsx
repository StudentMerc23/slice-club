import "./WhereWePlay.css";
import courses from "../../data/courses";

function WhereWePlay() {
  const course = courses[0];

  return (
    <section id="where-we-play" className="where-we-play">
      <div className="where-we-play__layout">
        <div className="where-we-play__info">
          <h2 className="where-we-play__title">
            ¿DÓNDE
            <br />
            JUGAMOS?
          </h2>

          <div className="where-we-play__course-info">
            <h3 className="where-we-play__course-name">{course.name}</h3>

            <p className="where-we-play__location">{course.location}</p>
          </div>

          <div className="where-we-play__small-stats">
            <div className="course-stat">
              <span className="course-stat__label">HOYOS</span>
              <span className="course-stat__value">{course.holes}</span>
            </div>

            <div className="course-stat">
              <span className="course-stat__label">PAR</span>
              <span className="course-stat__value">{course.par}</span>
            </div>
          </div>

          <div className="course-stat course-stat--yards">
            <span className="course-stat__label">TOTAL YD</span>
            <span className="course-stat__value">{course.yards}</span>
          </div>
        </div>

        <img
          className="where-we-play__image"
          src={course.image}
          alt={course.name}
        />
      </div>
    </section>
  );
}

export default WhereWePlay;
