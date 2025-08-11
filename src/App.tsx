import { Suspense } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import routes from "tempo-routes";
// Make sure the file exists at ./pages/HomePage.tsx or ./pages/HomePage/index.tsx
import HomePage from "./pages/HomePage"; // Update the path or filename if needed
import "./index.css";
import ProductPage from "./pages/ProductsPage";
import IndustriesPage from "./pages/IndustriesPage";
import ResourcesPage from "./pages/ResourcesPage";
import PricingPage from "./pages/PricesPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
