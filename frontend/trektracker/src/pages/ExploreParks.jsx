import React from "react";
import AutoCompleteSearch from "../components/AutoCompleteSearch";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const ExploreParks = () => {
  const [text, setText] = useState("");

  const handleParkChoice = (selection) => {
    setText(selection);
  };
  return (
    <div className="trekbody">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h1>Explore The National Parks</h1>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column justify-content-center" style={{width: '100%'}}>
            {/* <div className="m-auto"> */}
              <div className="box p-4 bg-light border rounded">
                <AutoCompleteSearch handleParkChoice={handleParkChoice} />
              </div>
              <br></br>
              <Link to={`/explore/${text.park_code}`}>
                <Button type="button" className="full-btn btn btn-primary btn-lg btn-block">
                  Search
                </Button>
              </Link>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreParks;
