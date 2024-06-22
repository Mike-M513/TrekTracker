// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './UserAuthContext';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
