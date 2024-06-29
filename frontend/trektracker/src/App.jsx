import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Trakker from './pages/Trakker';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AcctPage from "./pages/AcctPage";
import DeletionSuccess from "./pages/DeletionSuccess";

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/trakker" element={<Trakker />} />
        <Route path="/account" element={<AcctPage />} />
        <Route path="/deletion-success" element={<DeletionSuccess />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
