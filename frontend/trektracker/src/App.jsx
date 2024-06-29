import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Tracker from './pages/Tracker';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AcctPage from "./pages/AcctPage";
import ExploreParks from "./pages/ExploreParks";
import ParkPage from "./pages/ParkPage";
import AddParkVisit from "./pages/AddParkVisit";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AcctPage />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/addvisit" element={<AddParkVisit />} />
        <Route path="/explore" element={<ExploreParks />} />
        <Route path="/explore/:parkCode" element={<ParkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
