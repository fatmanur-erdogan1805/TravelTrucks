import { Link, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

const HomePage = () => {
  const location = useLocation();

  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeBigTitle}>Campers of your dreams</h1>
      <h2 className={css.homeSmallTitle}>
        You can find everything you want in our catalog
      </h2>
      <Link to={`/catalog`} state={{ from: location }}>
        <button className={css.homeBtn}>View now</button>
      </Link>
    </div>
  );
};

export default HomePage;
