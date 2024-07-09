import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AutoCompleteSearch from "../components/AutoCompleteSearch";
import AutoCompleteActivities from "../components/AutoCompleteActivities";
import { getParkData } from "../api/api";

export default function AddParkVisit() {
  const [parkCode, setParkCode] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [date, setDate] = useState();
  const [activities, setActivities] = useState(null);
  const [text, setText] = useState("")

  const handleDateChange = (e) => setDate(e.target.value);
  
  const handleParkChoice = (selection) => {
    setParkCode(selection['park_code']);
  };

  const handleActivityChoice = (selection) => {
    setText(selection)
  }
  
  useEffect(() => {
    async function performGetParkData() {
      const park = await getParkData(parkCode);
      setActivityData(park.result[0]['activities']);
    }
    performGetParkData();
  }, [parkCode]);

  console.log(text)

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
              >
                <Form.Label>Activities</Form.Label>
                <AutoCompleteActivities activities={activityData} handleActivityChoice={handleActivityChoice}/>
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
