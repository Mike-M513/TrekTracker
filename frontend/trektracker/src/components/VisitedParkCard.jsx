import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function VisitedParkCard({park}) {
    return (
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="..." className='card-img-top' /> */}
        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
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
            <Link to={`/parks/${park.park_code}`} state={{ park: park }}>
                <Button>Visit Park Page</Button>
            </Link>
        </Card.Body>
    </Card>
    )
}