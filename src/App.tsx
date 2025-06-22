import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PhotoPage } from "./pages/PhotoPage";
import { ErrorBoundary } from "./components/ErrorBoundary";

export const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoPage />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);
