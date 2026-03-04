import { useEffect, lazy, Suspense } from "react";
import css from "./CampersPage.module.css";
import Loader from "../../components/Loader/Loader";
import Filter from "../../components/Filter/Filter";
import { selectLoading } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/filter/selectors";

const CamperList = lazy(() => import("../../components/CamperList/CamperList"));

const CampersPage = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <div className={css.catalogContainer}>
        <Filter />
        {isLoading ? <Loader /> : <CamperList campers={filteredCampers} />}
      </div>
    </Suspense>
  );
};

export default CampersPage;
