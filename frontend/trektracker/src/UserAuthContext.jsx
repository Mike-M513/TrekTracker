// src/UserAuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserAuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
  const navigate = useNavigate();

  useEffect(() => {
    if (authTokens) {
      setUser({ username: authTokens.username, user_id: authTokens.user_id });
    }
  }, [authTokens]);

  const loginUser = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username,
        password,
      });
      setAuthTokens(response.data);
      setUser({ username: response.data.username, user_id: response.data.user_id });
      localStorage.setItem('authTokens', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const registerUser = async (username, password) => {
    try {
      await axios.post('http://localhost:8000/api/register/', {
        username,
        password,
      });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/login');
  };

  return (
    <UserAuthContext.Provider value={{ user, authTokens, loginUser, registerUser, logoutUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;
