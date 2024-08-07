import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, json } from "react-router-dom";

export default function SignIn({ handleSetToken, handleSetUser }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    const userObj = {
      username: username,
      password: password,
    };
    const token = await fetchToken(userObj);
    localStorage.setItem("token", token);
    localStorage.setItem("Username", username);

    handleSetToken(token);
    setShouldRedirect(true);
  };

  const fetchToken = async (userObj) => {
    const url = `http://${import.meta.env.VITE_BASE_URL}/api/users/get-token/`;
    const context = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    };
    const resp = await fetch(url, context);
    const body = await resp.json();
    return body.token;
  };

  if (shouldRedirect) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="landing-page">
        <div className="jumbotron vertical-center">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="trekbody">
              <div className="row">
                <div className="col text-center landing-page-title">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      fill="currentColor"
                      className="bi bi-backpack3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                      <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c.465.165.904.385 1.308.653l.416-1.247a1 1 0 0 1 1.748-.284l.77 1.027a1 1 0 0 1 .15.917l-.803 2.407C13.854 6.49 14 7.229 14 8v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8c0-.771.146-1.509.41-2.186l-.802-2.407a1 1 0 0 1 .15-.917l.77-1.027a1 1 0 0 1 1.748.284l.416 1.247A6 6 0 0 1 6 2.34ZM7 2v.083a6 6 0 0 1 2 0V2a1 1 0 1 0-2 0m5.941 2.595.502-1.505-.77-1.027-.532 1.595q.447.427.8.937M3.86 3.658l-.532-1.595-.77 1.027.502 1.505q.352-.51.8-.937M8 3a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5" />
                    </svg>
                    TrekTracker
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col text-center">
                  <h2>Sign In</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form>
                    <Form.Label htmlFor="inputUsername">Username</Form.Label>
                    <Form.Control
                      type="username"
                      id="inputUsername"
                      onChange={handleUsernameChange}
                    />
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      onChange={handlePasswordChange}
                    />
                    <Form.Text id="passwordHelpBlock" muted></Form.Text>
                  </Form>
                  <br></br>
                  <Button
                    type="button" className="full-btn btn btn-primary btn-lg btn-block"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
