import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AcctPage.css";

const getToken = () => {
  // return localStorage.getItem('token');
  return "Token f793057c358e119059cb6ca536cd1085f70aeef2";
};

//Fetch User Data
const getUserData = async () => {
  const token = getToken();
  try {
    const response = await fetch("http://127.0.0.1:8000/users/user/", {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    return null;
  }
};

// Update Password
const updatePassword = async (newPassword) => {
  const token = getToken();
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/users/update-password/",
      {
        method: "PUT",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: newPassword }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update password");
    }
  } catch (error) {
    console.error("Failed to update password:", error);
  }
};

//Update Email
const updateEmail = async (newEmail) => {
  const token = getToken();
  try {
    const response = await fetch("http://127.0.0.1:8000/users/update-email/", {
      method: "PUT",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: newEmail }),
    });
    if (!response.ok) {
      throw new Error("Failed to update email");
    }
  } catch (error) {
    console.error("Failed to update email:", error);
  }
};

// Delete User
const deleteUser = async () => {
  const token = getToken();
  try {
    const response = await fetch("http://127.0.0.1:8000/users/delete-user/", {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete user account");
    }
  } catch (error) {
    console.error("Failed to delete user account:", error);
  }
};

// Mocking fetch for testing purposes
// const getUserData = async () => {
//     return {
//         first_name: "John",
//         last_name: "Doe",
//         username: "username",
//         email: "john.doe@example.com",
//         password: "password"
//     };
// };

export default function AcctPage() {
  const [user, setUser] = useState(null);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserData() {
      const data = await getUserData();
      if (data) {
        setUser(data);
        setEmail(data.email);
        setPassword(data.password);
        setOriginalEmail(data.email);
      }
    }
    fetchUserData();
  }, []);

  const handleEmailEditClick = () => {
    setIsEditingEmail(true);
  };

  const handlePasswordEditClick = () => {
    setIsEditingPassword(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailSave = async () => {
    await updateEmail(email);
    alert("Email has been updated");
    setIsEditingEmail(false);
    setOriginalEmail(email);
  };

  const handlePasswordSave = async () => {
    await updatePassword(password);
    alert("Password has been updated");
    setIsEditingPassword(false);
  };

  const handleEmailCancel = () => {
    setEmail(originalEmail);
    setIsEditingEmail(false);
  };

  const handlePasswordCancel = () => {
    setPassword(password);
    setIsEditingPassword(false);
  };

  const handleDeleteProfile = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    await deleteUser();
    alert("Profile Deleted");
    setShowDeleteConfirm(false);
    navigate("/deletion-success");
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const maxAsteriks = 8;
  const displayedPassword = "*".repeat(
    Math.min(user?.password.length || 0, maxAsteriks)
  );

  return (
    <main className="acct-page">
      {user ? (
        <>
          <h1>Account Information</h1>
          <div>
            <p>
              <strong>Name:</strong> {user.first_name} {user.last_name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong>
              {isEditingEmail ? (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <button onClick={handleEmailSave}>Save</button>
                  <button onClick={handleEmailCancel}>Cancel</button>
                </>
              ) : (
                <>
                  {email}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil"
                    viewBox="0 0 16 16"
                    onClick={handleEmailEditClick}
                    style={{ cursor: "pointer", marginLeft: "8px" }}
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                </>
              )}
            </p>
            <p>
              <strong>Password:</strong>
              {isEditingPassword ? (
                <>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button onClick={handlePasswordSave}>Save</button>
                  <button onClick={handlePasswordCancel}>Cancel</button>
                </>
              ) : (
                <>
                  {/* {"*".repeat(password.length)} */}
                  {displayedPassword}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil"
                    viewBox="0 0 16 16"
                    onClick={handlePasswordEditClick}
                    style={{ cursor: "pointer", marginLeft: "8px" }}
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                </>
              )}{" "}
            </p>
          </div>
          <button
            onClick={handleDeleteProfile}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Delete Profile
          </button>
          {showDeleteConfirm && (
            <div
              className="delete-confirmation"
              style={{ marginTop: "1rem", textAlign: "center" }}
            >
              <p>
                Are you sure you want to delete your profile?<br></br> you will
                lose all data once account is deleted.
              </p>
              <button
                onClick={handleConfirmDelete}
                style={{
                  marginRight: "0.5rem",
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  cursor: "pointer",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Confirm Delete
              </button>
              <button
                onClick={handleCancelDelete}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  cursor: "pointer",
                  backgroundColor: "gray",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
