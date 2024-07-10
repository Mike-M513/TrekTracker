import { useState, useEffect, act } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Badge } from "react-bootstrap";
import AutoCompleteSearch from "../components/AutoCompleteSearch";
import AutoCompleteActivities from "../components/AutoCompleteActivities";
import { getParkData } from "../api/api";

export default function AddParkVisit() {
  const [parkCode, setParkCode] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [date, setDate] = useState();
  const [visitDescription, setVisitDescription] = useState("");

  const [text, setText] = useState("");

  const handleDateChange = (e) => setDate(e.target.value);

  const handleVisitDescription = (e) => setVisitDescription(e.target.value);

  const handleParkChoice = (selection) => {
    setParkCode(selection["park_code"]);
  };

  const handleActivityChoice = (selection) => {
    setText(selection.map((val) => val.name));
  };

  useEffect(() => {
    async function performGetParkData() {
      const park = await getParkData(parkCode);
      setActivityData(park.result[0]["activities"]);
    }
    performGetParkData();
  }, [parkCode]);

  const handleSubmit = async (e) => {
    const visitObj = {
      date: date,
      user: localStorage.getItem("Username"),
      park: parkCode,
      activity: text,
      visit_description: visitDescription,
    };
    console.log(e);
    createVisit(visitObj);
  };

  const createVisit = async (visitObj) => {
    const url = "http://127.0.0.1:8000/visit/new_visit/";
    const context = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitObj),
    };
    const resp = await fetch(url, context);
    const body = await resp.json();
  };

  console.log(date);
  console.log(localStorage.getItem("Username"));
  console.log(parkCode);
  console.log(text);
  console.log(visitDescription);

  return (
    <div className="trekbody">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Add Park Visit</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Park name</Form.Label>
                <AutoCompleteSearch handleParkChoice={handleParkChoice} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date visited</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  onChange={handleDateChange}
                />
                <Form.Text className="text-muted">
                  Enter a date in format MM/DD/YYYY. For example, 09/21/2021.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Activities</Form.Label>
                <AutoCompleteActivities
                  activities={activityData}
                  handleActivityChoice={handleActivityChoice}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Visit Description</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Tell Us About Your Trip!"
                  rows={3}
                  maxLength={200}
                  onChange={handleVisitDescription}
                ></Form.Control>
                <Badge className="mb-3">{visitDescription.length}/200</Badge>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
