import React from "react";

const OverviewSection = ({ park }) => {
  return (
    <div className="overview-section">
      <h2>{park.fullName}</h2>
      <p>{park.description}</p>
      <p>
        Location: {park.addresses[0].city}, {park.addresses[0].stateCode}
      </p>
      <p>Operating Hours: {park.operatingHours[0].description}</p>
    </div>
  );
};

export default OverviewSection;
