import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";

export default function SignOut({ handleUserSignOut }) {
  const handleSignOut = () => {
    localStorage.clear();
    handleUserSignOut();
  };

  return (
    <>
      <h1>Are you sure you want to sign out?</h1>
      <Link to="/">
        <button onClick={handleSignOut}>Confirm Sign Out</button>
      </Link>
    </>
  );
}
