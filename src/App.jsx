import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import Logo from "./components/Logo/Logo";
const CampersPage = lazy(() => import("./pages/CampersPage/CampersPage"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage")
);
const CamperFeatures = lazy(() =>
  import("./components/CamperFeatures/CamperFeatures")
);
const CamperReviews = lazy(() =>
  import("./components/CamperReviews/CamperReviews")
);
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersPage />} />
        <Route path="/catalog/:camperId" element={<CamperDetailsPage />}>
          <Route path="features" element={<CamperFeatures />} />
          <Route path="reviews" element={<CamperReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
