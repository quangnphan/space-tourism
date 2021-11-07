import React, { useState } from "react";
import Background from "../components/Background";
import { technology } from "../data.json";

export default function Technology() {
  const [tech, setTech] = useState({
    name: technology[0].name,
    images: technology[0].images,
    description: technology[0].description,
  });
  const handleClick = (name) => {
    let newTech = technology.find((tech) => tech.name === name);
    setTech(newTech);
  };
  return (
    <main>
      <section className="technology">
        <h1 className="heading">
          <span>03</span> space launch 101
        </h1>
        <div className="flex">
          <div className="tech-info">
            <div className="numbers">
              {technology.map((item, key) => {
                return (
                  <div
                    className={(item.name===tech.name ? "number numberActive" : "number")}
                    key={item.name}
                    onClick={() => {
                      handleClick(item.name);
                    }}
                  >
                    {key+1}
                  </div>
                );
              })}
            </div>
            <div className="tech-main">
              <div className="terminology">the terminology ...</div>
              <h1 className="tech-name">{tech.name}</h1>
              <p>{tech.description}</p>
            </div>
          </div>
          <div className="image">
            <picture>
              <source
                srcSet={tech.images.portrait}
                media="(min-width: 1200px)"
              ></source>
              <img src={tech.images.landscape} alt="tech-img"></img>
            </picture>
          </div>
        </div>
      </section>
      <Background
        mobile="technology/background-technology-mobile.jpg"
        tablet="technology/background-technology-tablet.jpg"
        desktop="technology/background-technology-desktop.jpg"
      />
    </main>
  );
}
