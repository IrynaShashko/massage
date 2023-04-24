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
        <Route path="/price" element={<PricePage />} />
      </Routes>
    </Suspense>
  );
};

export default NavRoutes;
