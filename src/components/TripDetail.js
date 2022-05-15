import React from "react";
import tripsData from "../tripsData";

import { Navigate, useParams } from "react-router-dom";

function TripDetail() {
  const trip = tripsData[0];
  const { tripId } = useParams();
  const tripFind = tripsData.find((trip) => trip.id === +tripId);
  if (!tripFind) return <Navigate to="/Home.js" />;
  return (
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {tripFind.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={tripFind.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {tripFind.city}
                  <br />
                  Length : {tripFind.length1}Km
                  <br />
                  Rating : {tripFind.rating}
                  <br />
                  Difficulty : {tripFind.difficulty}
                  <br />
                  Details : {tripFind.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
