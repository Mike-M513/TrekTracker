import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trakker from "./pages/Trakker";
import ExploreParks from "./pages/ExploreParks";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/trakker" element={<Trakker />} />
        <Route path="/explore" element={<ExploreParks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
