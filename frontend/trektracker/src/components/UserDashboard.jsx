// src/components/UserDashboard.jsx
import { useContext } from 'react';
import UserAuthContext from '../UserAuthContext';

const UserDashboard = () => {
  const { user, logoutUser } = useContext(UserAuthContext);

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default UserDashboard;
