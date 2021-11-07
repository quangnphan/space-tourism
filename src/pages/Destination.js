import React, { useState } from "react";
import Background from "../components/Background";
import { destinations } from "../data.json";
export default function Destination() {
  const [destination, setDestination] = useState({
    name: destinations[0].name,
    images: destinations[0].images,
    description: destinations[0].description,
    distance: destinations[0].distance,
    travel: destinations[0].travel,
  });
  const handleClick = (name) => {
    let newDestination = destinations.find((item) => item.name === name);
    setDestination(newDestination);
  };
  return (
    <main>
      <section className="destination">
        <h1 className="heading">
          <span>01</span> pick your destination
        </h1>
        <div className="flex">
          <div className="image">
            <img src={destination.images.png} alt="des-img"></img>
          </div>
          <div className="des-info">
            <div className="des-names">
              {destinations.map((item) => (
                <div className={(item.name === destination.name ? "nameActive dName" : "dName")} key={item.name} onClick={() => handleClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </div>
            <div className="des-main">
              <h1>{destination.name}</h1>
              <p>{destination.description}</p>
            </div>
            <div className="des-distance">
              <div className="avg-distance">
                <div>
                  <span>avg. distance</span>
                  <br></br>
                  {destination.distance}
                </div>
              </div>
              <div className="travel-time">
                <div>
                  <span>est. travel time</span>
                  <br></br>
                  {destination.travel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Background
        mobile="destination/background-destination-mobile.jpg"
        tablet="destination/background-destination-tablet.jpg"
        desktop="destination/background-destination-desktop.jpg"
      />
    </main>
  );
}
