import css from "./Rating.module.css";
import sprite from "../../../public/sprite.svg";

const Rating = ({ rating }) => {
  const maxRating = 5;

  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div className={css.ratingContainer}>
      {stars.map((star) => (
        <svg
          key={star}
          className={`${css.star} ${star <= rating ? css.filled : ""}`}
          width="16"
          height="16"
        >
          <use href={`${sprite}#icon-starDefault`} />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
