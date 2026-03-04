import { useOutletContext } from "react-router-dom";
import Rating from "../Rating/Rating";
import css from "./CamperReviews.module.css";

const CamperReviews = () => {
  const { camperDetails } = useOutletContext();

  return (
    <ul className={css.reviewsList}>
      {camperDetails.reviews?.length > 0 ? (
        camperDetails.reviews.map((review, index) => {
          return (
            <li key={index} className={css.authorItem}>
              <div className={css.authorContainer}>
                <div className={css.authorInitial}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className={css.reviewsAuthor}>{review.reviewer_name}</h3>
                  <Rating rating={review.reviewer_rating} />
                </div>
              </div>
              <p className={css.authorComment}>{review.comment}</p>
            </li>
          );
        })
      ) : (
        <p>We don&apos;t have any reviews for this camper</p>
      )}
    </ul>
  );
};

export default CamperReviews;
