import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tracker from "./pages/Tracker";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AcctPage from "./pages/AcctPage";
import DeletionSuccess from "./pages/DeletionSuccess";
import ExploreParks from "./pages/ExploreParks";
import ParkPage from "./pages/ParkPage";
import AddParkVisit from "./pages/AddParkVisit";
import EditParkVisit from "./pages/EditParkVisit";
import RegisterSignIn from "./pages/RegisterSignIn";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import UserContext from "./context/UserContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null)

  const handleSetToken = (userToken) => {
    console.log(userToken);
    setToken(userToken);
  };

  const handleSetUser = (user) => {
    setUser(user)
  }

  const handleSignOut = () => {
    setToken(null);
    setIsAuthenticated(false);
    console.log(`SET IS AUTHENTUICATED ${isAuthenticated}`);
  };

  // const setLocalStorage = () => {
  //   localStorage.setItem("token", token);
  // };

  useEffect(() => {
    console.log("USING THE USE EFFECT");
    console.log(token);
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      // setLocalStorage();
    }
    // setIsAuthenticated(true);
  }, [token]);

  return (
    <>
      <UserContext.Provider value={token}>
        {isAuthenticated ? (
          <BrowserRouter>
            <Navigation handleUserSignOut={handleSignOut} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<AcctPage />} />
              <Route path="/deletion-success" element={<DeletionSuccess />} />

              <Route path="/tracker" element={<Tracker />} />
              <Route path="/addvisit" element={<AddParkVisit />} />
              <Route path="/editvisit" element={<EditParkVisit />} />
              <Route path="/explore" element={<ExploreParks />} />
              <Route path="/explore/:parkCode" element={<ParkPage />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RegisterSignIn />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/sign-in"
                element={<SignIn handleSetToken={handleSetToken} handleSetUser={handleSetUser}/>}
              />
            </Routes>
          </BrowserRouter>
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
