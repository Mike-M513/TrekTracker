import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AutoCompleteSearch from "../components/AutoCompleteSearch";

export default function AddParkVisit() {
  const [park, setPark] = useState();
  const [date, setDate] = useState();
  const [activities, setActivities] = useState([]);

  // const handleParkChange = (e) => setPark(text.park_name);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleActivitiesChange = (e) =>
    setActivities(activities.push(e.target.value));

  const [text, setText] = useState("");

  const handleParkChoice = (selection) => {
    setText(selection);
    setPark(text.park_name);
    console.log(text);
    console.log(park);
  };

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
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
                onChange={handleActivitiesChange}
              >
                <Form.Label>Activities</Form.Label>
                <Form.Check
                  type="checkbox"
                  value="Arts and Culture"
                  label="Arts and Culture"
                />
                <Form.Check
                  type="checkbox"
                  value="Astronomy"
                  label="Astronomy"
                />
                <Form.Check type="checkbox" label="Auto and ATV" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
