import React from "react";
import "./Section.css";

function Section(props) {
  return (
    <section
      style={{ backgroundImage: "url( images/" + props.background + " )" }}
    >
      <div className="carModel">
        <h1>{props.name}</h1>
        <p>{props.tagline}</p>
      </div>
      <div className="orderButton">
        <div className="buttons">
          <a href="" className="left">
            {props.leftBtn}
          </a>
          {props.rightBtn && (
            <a href="" className="right">
              {props.rightBtn}
            </a>
          )}
        </div>
        {props.arrow && <img src="images/down-arrow.svg" alt="" />}
      </div>
    </section>
  );
}

export default Section;
