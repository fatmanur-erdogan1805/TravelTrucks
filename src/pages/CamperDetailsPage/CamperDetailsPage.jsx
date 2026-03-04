import { useEffect, useState, Suspense } from "react";
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
  NavLink,
} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import css from "./CamperDetailsPage.module.css";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import { fetchCamperDetailsById } from "../../redux/campers/operations.js";
import sprite from "../../../public/sprite.svg";
import clsx from "clsx";

const CamperDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("features"); // Управляет отображением по умолчанию
  const location = useLocation();
  const { camperId } = useParams();
  const [camperDetails, setCamperDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!camperId) return;
    const fetchCamperDetails = async () => {
      try {
        setLoading(true);
        const { data } = await fetchCamperDetailsById(camperId);
        setCamperDetails(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (camperId) {
      fetchCamperDetails();
    }
  }, [camperId]);

  useEffect(() => {
    if (
      camperId &&
      !location.pathname.includes("features") &&
      !location.pathname.includes("reviews")
    ) {
      navigate("features", { replace: true });
    }
  }, [camperId, location.pathname, navigate]);

  const activeLink = ({ isActive }) => {
    return clsx(css.detailsLink, isActive && css.active);
  };

  return (
    <main>
      <div className={css.container}>
        {loading && <Loader />}
        {camperDetails !== null && (
          <div className={css.camper}>
            <div className={css.camperContainer}>
              <h1 className={css.camperName}>{camperDetails.name}</h1>
              <div className={css.ratingContainer}>
                <div className={css.ratingAndReviews}>
                  <svg className={css.star} width="16" height="16">
                    <use href={`${sprite}#icon-starDefault`} />
                  </svg>
                  <p>{camperDetails.rating}</p>
                  <Link
                    to={`/campers/${camperDetails.id}`}
                    state={{ from: location }}
                  >
                    <p>({camperDetails.reviews.length} Reviews)</p>
                  </Link>
                </div>
                <div className={css.locationContainer}>
                  <svg className={css.iconMap} width="16" height="16">
                    <use href={`${sprite}#icon-Map`} />
                  </svg>
                  <p>{camperDetails.location}</p>
                </div>
              </div>
              <p className={css.camperPrice}>
                &euro;{Number(camperDetails.price).toFixed(2)}
              </p>
            </div>
            <ul className={css.camperList}>
              {Array.isArray(camperDetails.gallery) &&
                camperDetails.gallery.map((camperPhoto, index) => (
                  <li key={index}>
                    <img
                      src={camperPhoto.original}
                      alt={camperDetails.name}
                      className={css.camperListPhoto}
                      width={292}
                    />
                  </li>
                ))}
            </ul>
            <p className={css.description}>{camperDetails.description}</p>
          </div>
        )}
        <div className={css.camperInformation}>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <NavLink
                className={activeLink}
                to="features"
                onClick={() => setSelectedTab("features")}
              >
                Features
              </NavLink>
            </li>
            <li className={css.detailsItem}>
              <NavLink
                className={activeLink}
                to="reviews"
                onClick={() => setSelectedTab("reviews")}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={css.detailsContainer}>
          <Suspense fallback={<Loader />}>
            <Outlet context={{ camperDetails }} />
          </Suspense>
          <BookingForm />
        </div>
      </div>
    </main>
  );
};

export default CamperDetailsPage;
