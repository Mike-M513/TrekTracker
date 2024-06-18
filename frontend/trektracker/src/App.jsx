import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Trakker from './pages/Trakker';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/trakker" element={<Trakker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
