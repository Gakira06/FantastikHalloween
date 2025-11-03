import HomePage from "./pages/HomePage";
import CatalogoPage from "./pages/CatalogoPage";
import ContatoPage from "./pages/ContatoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
