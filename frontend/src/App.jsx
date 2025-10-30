import HomePage from "./pages/HomePage";
import CatalogoPage from "./pages/CatalogoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
