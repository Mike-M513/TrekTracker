import React from "react";
import AutoCompleteSearch from "../components/AutoCompleteSearch";
import Button from "react-bootstrap/esm/Button";
import './ExploreParks.css'

const ExploreParks = () => {
  return (
    <>
      <div className="d-flex vh-100">
        <div className="m-auto">
          <div className="box p-4 bg-light border rounded">
            <AutoCompleteSearch />
          </div>
          <div>
            <Button type="button" className="btn btn-primary btn-lg btn-block">
              Search
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreParks;
