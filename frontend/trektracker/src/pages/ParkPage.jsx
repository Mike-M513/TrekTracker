import React from "react";
import { useParams } from "react-router-dom";
import { getParkData, getParkAlerts } from "../api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import HeroSection from "../components/HeroSection";
import OverviewSection from "../components/OverviewSection";
import AlertsSection from "../components/AlertsSection";
import Loading from "../components/Loading";
import WeatherSection from "../components/WeatherSection";

const ParkPage = () => {
  const { parkCode } = useParams();
  const [parkData, setParkData] = useState(null);
  const [parkAlerts, setParkAlerts] = useState([]);

  useEffect(() => {
    async function performGetParkData() {
      const park = await getParkData(parkCode);
      // console.log(park.result[0])
      setParkData(park.result[0]);
    }
    performGetParkData();
  }, []);

  useEffect(() => {
    async function performGetParkAlerts() {
      const park = await getParkAlerts(parkCode);
      setParkAlerts(park.result);
    }
    performGetParkAlerts();
  }, [parkData]);

  if (!parkData) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
    <div>
      <Link to={"/explore"}>
          {/* <Button type="button" className="btn btn-primary btn-lg btn-block">
            Back
          </Button> */}
      </Link>
      <HeroSection
        image={parkData.images[0]}
        description={parkData.fullName}
      />
    </div>
    <div className="trekbody">
      <div className="container">
        <OverviewSection park={parkData} />
        <AlertsSection alerts={parkAlerts} />
        <WeatherSection lat={parkData.latitude} long={parkData.longitude} />
      </div>
    </div>
    </>
  );
};

export default ParkPage;
