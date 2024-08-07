import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Badge } from "react-bootstrap";
import AutoCompleteSearch from "../components/AutoCompleteSearch";
import AutoCompleteActivities from "../components/AutoCompleteActivities";
import { getParkData } from "../api/api";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Slide } from "react-toastify";

export default function AddParkVisit() {
  const [parkCode, setParkCode] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [date, setDate] = useState();
  const [visitDescription, setVisitDescription] = useState("");
  const [text, setText] = useState("");
  const [redirect, setRedirect] = useState(false);

  const autoCompleteSearchRef = useRef(null);
  const autoCompleteActivitiesRef = useRef(null);

  const handleDateChange = (e) => setDate(e.target.value);

  const handleVisitDescription = (e) => setVisitDescription(e.target.value);

  const handleParkChoice = (selection) => {
    setParkCode(selection["park_code"]);
  };

  const handleActivityChoice = (selection) => {
    setText(
      selection.map((val) => ({
        activity_name: val.name,
        activity_code: val.id,
      }))
    );
  };

  useEffect(() => {
    async function performGetParkData() {
      const park = await getParkData(parkCode);
      setActivityData(park.result[0]["activities"]);
    }
    performGetParkData();
  }, [parkCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const visitObj = {
      date: date,
      user: localStorage.getItem("Username"),
      park: parkCode,
      activity: text,
      visit_description: visitDescription,
    };
    const success = await createVisit(visitObj);
    if (success) {
      resetForm();
      toast.success("Visit has been added👍", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  const handleSecondarySubmit = async (e) => {
    e.preventDefault();
    const visitObj = {
      date: date,
      user: localStorage.getItem("Username"),
      park: parkCode,
      activity: text,
      visit_description: visitDescription,
    };
    const success = await createVisit(visitObj);
    if (success) {
      resetForm();
      setRedirect(true);
    }
  };

  const resetForm = () => {
    setParkCode(null);
    setActivityData([]);
    setDate("");
    setVisitDescription("");
    setText("");

    if (autoCompleteSearchRef.current) {
      autoCompleteSearchRef.current.clear();
    }
    if (autoCompleteActivitiesRef.current) {
      autoCompleteActivitiesRef.current.clear();
    }
  };

  const createVisit = async (visitObj) => {
    const url = `http://${import.meta.env.VITE_BASE_URL}/api/visits/new_visit/`;
    const context = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(visitObj),
    };
    const resp = await fetch(url, context);
    if (resp.ok) {
      return true;
    }
    return false;
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/tracker");
    }
  }, [redirect, navigate]);

  return (
    <div className="trekbody">
      <ToastContainer />
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
                <AutoCompleteSearch
                  handleParkChoice={handleParkChoice}
                  ref={autoCompleteSearchRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date visited</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  value={date}
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
                  ref={autoCompleteActivitiesRef}
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
                  value={visitDescription}
                  onChange={handleVisitDescription}
                ></Form.Control>
                <Badge className="mb-3">{visitDescription.length}/200</Badge>
              </Form.Group>
            </Form>
            <div className="d-flex">
              <Button
                variant="primary"
                type="button"
                onClick={handleSubmit}
                className="flex-grow-1 mx-1"
              >
                Submit & Add New Visit
              </Button>
              <br />
              <Button
                variant="primary"
                type="button"
                onClick={handleSecondarySubmit}
                className="flex-grow-1 mx-1"
              >
                Submit
              </Button>
              <br />
              <br />
              <Button
                variant="danger"
                type="button"
                onClick={() => navigate(-1)}
                className="flex-grow-1 mx-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
