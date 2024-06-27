import React from "react";

const AlertsSection = ({ alerts }) => {
  return (
    <div className="alerts-section">
      <h2>Alerts</h2>
      {alerts.length ? (
        <ul>
          {alerts.map((alert) => (
            <li key={alert.id}>
              <h3>{alert.title}</h3>
              <p>{alert.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No current alerts.</p>
      )}
    </div>
  );
};

export default AlertsSection;
