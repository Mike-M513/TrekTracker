import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function VisitedParkCard({park}) {
    return (
        <Card className="visitedParkCard" style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="..." className='card-img-top' /> */}
        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
        <Link to="/editvisit">
            <Button className="editParkCardButton">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-pencil"
                    viewBox="0 0 16 16"                
                >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
            </Button>
        </Link>
        <Card.Body>
            <Card.Title>{park.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            Date Visited: {park.visit_date}
            </Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Text>
            Activities: {park.activities}
            </Card.Text>
            <Link to={`/natl-parks/${park.park_code}`} state={{ park: park }}>
                <Button>Visit Park Page</Button>
            </Link>
        </Card.Body>
    </Card>
    )
}