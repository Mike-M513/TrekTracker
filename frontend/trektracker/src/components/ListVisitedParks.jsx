import { useState, useEffect, useContext } from "react";
import VisitedParkCard from "../components/VisitedParkCard";
import { getVisitedParks } from "../api/authApi";

export default function ListVisitedParks() {
  const [visitedParks, setVisitedParks] = useState([]);

  // replace later with userContext/token value
  const userToken = true;

  const createParkList = () => {
    return visitedParks.map((park, index) => (
       <div className="col-4">
        <VisitedParkCard key={index} park={park} />
        </div>
    ));
  };

  useEffect(() => {
    async function performGetVisitedParks() {
      // get all visited parks API call
      const parks = await getVisitedParks();
      setVisitedParks(parks);
    }
    if (userToken) {
      performGetVisitedParks();
    }
  }, [userToken]);

  return createParkList();
}
