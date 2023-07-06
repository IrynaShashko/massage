import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage/PortfolioPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage/ReviewsPage"));
const PricePage = lazy(() => import("./pages/PricePage/PricePage"));

const NavRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/price" element={<PricePage />}>
          <Route path="women" element={<ReviewsPage />} />
          <Route path="men" element={<ReviewsPage />} />
          <Route path="children" element={<ReviewsPage />} />
          <Route path="body" element={<ReviewsPage />} />
          <Route path="other" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default NavRoutes;
