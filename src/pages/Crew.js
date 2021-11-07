import React, { useState } from "react";
import Background from "../components/Background";
import { crew as crews } from "../data.json";

export default function Crew() {
  const [crew, setCrew] = useState({
    name: crews[0].name,
    images: crews[0].images,
    role: crews[0].role,
    bio: crews[0].bio,
  });
  const handleClick = (name) => {
    let newCrew = crews.find((crew) => crew.name === name);
    setCrew(newCrew);
  };
  return (
    <main>
      <section className="crew">
        <h1 className="heading">
          <span>02</span> meet your crew
        </h1>
        <div className="flex">
          <div className="crew-info">
            <div className="role">{crew.role}</div>
            <h1 className="crew-name">{crew.name}</h1>
            <p>{crew.bio}</p>
            <div className="dots">
              {crews.map((item) => {
                return (
                  <div
                    className={(item.name===crew.name ? "dot dotActive":"dot")}
                    key={item.name}
                    onClick={() => handleClick(item.name)}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="image">
            <img src={crew.images.png} alt="crew-img"></img>
          </div>
        </div>
      </section>
      <Background
        mobile="crew/background-crew-mobile.jpg"
        tablet="crew/background-crew-tablet.jpg"
        desktop="crew/background-crew-desktop.jpg"
      />
    </main>
  );
}
