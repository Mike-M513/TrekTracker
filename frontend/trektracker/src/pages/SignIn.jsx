import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, json } from "react-router-dom";

export default function SignIn({ handleSetToken }) {
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

    handleSetToken(token);
    setShouldRedirect(true);
  };

  const fetchToken = async (userObj) => {
    const url = "http://127.0.0.1:8000/users/get-token/";
    const context = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    };
    const resp = await fetch(url, context);
    const body = await resp.json();
    console.log(body.token);
    return body.token;
  };

  if (shouldRedirect) {
    // console.log(shouldRedirect);
    return <Navigate to="/" />;
  } else {
    return (
      <>
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
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </>
    );
  }
}
