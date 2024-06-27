import React from "react";
import AutoCompleteSearch from "../components/AutoCompleteSearch";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const ExploreParks = () => {
  const [text, setText] = useState("");

  const handleParkChoice = (selection) => {
    setText(selection);
  };
  return (
    <>
      <div className="d-flex vh-100">
        <div className="m-auto">
          <div className="box p-4 bg-light border rounded">
            <AutoCompleteSearch handleParkChoice={handleParkChoice} />
          </div>
          <div>
            <Link to={`/explore/${text.park_code}`}>
              <Button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Search
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreParks;
