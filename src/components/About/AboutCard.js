import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Loc Tran </span>
            CS Major <span className="blue">@Miami University.</span>
            <br />
            I am currently a junior.
            <br />
            <br />
            Coding is only a small part of my life, I also love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking 🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Building LEGO 🧱
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🚗
            </li>
            <li className="about-activity">
              <ImPointRight /> Soccer ⚽
            </li>
          </ul>

          <p style={{ color: "#126EB1" }}>
            The only failure in your twenties is inaction<br />
             The rest is trial and error
            {" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
