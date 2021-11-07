import React from "react";
import Background from "../components/Background"

export default function Home() {
  return (
    <main>
    <section className="home">
      <div className="home-heading">
        <h3>so, you want to travel to</h3>
        <h1>space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore">
        <button>explore</button>
      </div>
    </section>
    <Background 
      mobile="home/background-home-mobile.jpg"
      tablet="home/background-home-tablet.jpg"
      desktop="home/background-home-desktop.jpg"
    />
    </main>
  );
}
