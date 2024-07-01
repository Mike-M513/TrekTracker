import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import ListVisitedParks from "../components/ListVisitedParks";

export default function Tracker() {

    return (
        <div className="trekbody">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Tracker</h1>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col">
                        <h2>User Activity</h2>
                    </div>
                    <div className="col-3">
                        <Link to="/addvisit">
                            <Button>Add Park Visit</Button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <ListVisitedParks />
                </div>
            </div>
        </div>
    )
}