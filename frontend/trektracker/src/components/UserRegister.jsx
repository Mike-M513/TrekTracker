// src/components/UserRegister.jsx
import { useState, useContext } from 'react';
import UserAuthContext from '../UserAuthContext';

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useContext(UserAuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(username, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
