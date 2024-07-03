import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, json } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    const userObj = {
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    createUser(userObj);
  };

  const createUser = async (userObj) => {
    const url = "http://127.0.0.1:8000/users/register/";
    const context = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    };
    const resp = await fetch(url, context);
    const body = await resp.json();
    console.log(resp);
    if (resp.status == 201) {
      setShouldRedirect(true);
    }
  };

  if (shouldRedirect) {
    return <Navigate to="/sign-in" />;
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
          <Form.Label htmlFor="inputFirstName">First Name</Form.Label>
          <Form.Control
            type="firstName"
            id="inputFirstName"
            onChange={handleFirstNameChange}
          />
          <Form.Label htmlFor="inputLastName">Last Name</Form.Label>
          <Form.Control
            type="lastName"
            id="inputLastName"
            onChange={handleLastNameChange}
          />
          <Form.Label htmlFor="inputEmail">Email</Form.Label>
          <Form.Control
            type="email"
            id="inputEmail"
            onChange={handleEmailChange}
          />
        </Form>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </>
    );
  }
}
