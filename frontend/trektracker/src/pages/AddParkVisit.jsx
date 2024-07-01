import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getParks } from "../api/api";

export default function AddParkVisit() {
    // const [nationalParks, setNationalParks] = useState([]);
    
    // useEffect(() => {
    //     async function performGetParks() {
    //     const parks = await getParks();
    //     setNationalParks(parks);
    //     }
    //     performGetParks();
    // }, []);

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
                        <Form.Select>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date visited</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" />
                        <Form.Text className="text-muted">
                        Enter a date in format MM/DD/YYYY. For example, 09/21/2021.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Activities</Form.Label>
                        <Form.Check type="checkbox" label="Arts and Culture" />
                        <Form.Check type="checkbox" label="Astronomy" />
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
