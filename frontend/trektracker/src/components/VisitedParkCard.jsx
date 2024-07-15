import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getParkData } from "../api/api";
import { useEffect, useState } from "react";

export default function VisitedParkCard({ park }) {
  const [parkData, setParkData] = useState(null);
  const [image, setImage] = useState();

  useEffect(() => {
    async function performGetParkData() {
      const park2 = await getParkData(park.park.park_code);
      // console.log(park.result[0])
      setParkData(park2.result[0]);
    }
    setTimeout(() => performGetParkData(), 100);
  }, [park]);

  useEffect(() => {
    setTimeout(() => setImage(parkData.images[0].url), 100);
  }, [parkData]);

  console.log(parkData);

  return (
    <Card className="visitedParkCard" style={{ width: "22rem" }}>
      <Card.Img variant="top" src={image} className="card-img-top" />
      <Card.Body>
        <Card.Title>{park.park.park_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Date Visited: {park.date}
        </Card.Subtitle>
        <Card.Text>{park.visit_description}</Card.Text>
        <Card.Text>
          Activities:{" "}
          {park.activity.map((value, index) =>
            index < park.activity.length - 1
              ? value.activity_name + ", "
              : value.activity_name
          )}
        </Card.Text>
        <Link to={`/explore/${park.park.park_code}`}>
          <Button type="button" className="full-btn btn btn-primary btn-lg btn-block">Visit Park Page</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
