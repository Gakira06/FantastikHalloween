import HomePage from "./pages/HomePage";
import CatalogoPage from "./pages/CatalogoPage";
import ContatoPage from "./pages/ContatoPage";
import SobrePage from "./pages/SobrePage";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/sobre" element={<SobrePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
