import { Link, useLocation } from "react-router-dom";
import css from "./CamperList.module.css";
import {
  addToFavorites,
  loadMoreCampers,
  removeFromFavorites,
  resetVisibleItems,
} from "../../redux/campers/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  selectVisibleCampers,
} from "../../redux/campers/selectors";
import sprite from "../../../public/sprite.svg";
import Feature from "../Feature/Feature";
import { useEffect } from "react";

const CamperList = ({ campers }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const visibleItems = useSelector(selectVisibleCampers);
  const favorites = useSelector(selectFavorites);
  const visibleCampers = campers.slice(0, visibleItems);

  useEffect(() => {
    dispatch(resetVisibleItems()); // Сброс состояния при первой загрузке
  }, [dispatch]);

  const handleFavoriteToggle = (camper) => {
    const isFavorite = favorites.some(
      (favCamper) => favCamper.id === camper.id
    );

    if (isFavorite) {
      dispatch(removeFromFavorites(camper));
    } else {
      dispatch(addToFavorites(camper));
    }
  };

  if (!campers) return <p>Loading campers...</p>;

  const handleLoadMore = () => {
    dispatch(loadMoreCampers());
  };

  return (
    <main>
      <div className={css.campersContainer}>
        <ul className={css.cardList}>
          {Array.isArray(visibleCampers) &&
            visibleCampers.map((camper) => {
              const isFavorite = favorites.some(
                (favCamper) => favCamper.id === camper.id
              );
              return (
                <li key={camper.id} className={css.cardItem}>
                  <img
                    src={camper.gallery[0].original}
                    alt={camper.name}
                    width={292}
                    className={css.cardPhoto}
                  />
                  <div className={css.cardDetailsContainer}>
                    <div>
                      <div className={css.cardDetailsTitle}>
                        <h2 className={css.cardName}>{camper.name}</h2>
                        <div className={css.cardPriceAndFavourite}>
                          <p className={css.cardPrice}>
                            &euro;{Number(camper.price).toFixed(2)}
                          </p>
                          <button
                            className={`${css["favorite-btn"]} ${
                              isFavorite ? css["favorite-active"] : ""
                            }`}
                            onClick={() => handleFavoriteToggle(camper)}
                          >
                            <svg width={25} height={24}>
                              <use href={`${sprite}#icon-heartDefault`} />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className={css.ratingContainer}>
                        <div className={css.ratingAndStarContainer}>
                          <svg className={css.star} width={16} height={16}>
                            <use href={`${sprite}#icon-starDefault`} />
                          </svg>
                          <p className={css.cardRating}>{camper.rating}</p>
                          <Link
                            to={`/catalog/${camper.id}`}
                            state={{ from: location }}
                          >
                            <p>({camper.reviews.length} Reviews)</p>
                          </Link>
                        </div>
                        <div className={css.locationContainer}>
                          <svg className={css.iconMap} width="16" height="16">
                            <use href={`${sprite}#icon-Map`} />
                          </svg>
                          <p className={css.cardLocation}>{camper.location}</p>
                        </div>
                      </div>
                    </div>
                    <p className={css.description}>{camper.description}</p>
                    <Feature camperDetails={camper} />
                    <Link
                      to={`/catalog/${camper.id}`}
                      state={{ from: location }}
                    >
                      <button className={css.showMoreBtn}>Show more</button>
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
        {visibleItems < campers.length && (
          <button className={css.loadMoreBtn} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </main>
  );
};

export default CamperList;
