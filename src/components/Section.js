import React from "react";
import { Link } from "react-router-dom";

export default function Section({
  lineText,
  headerText,
  descText,
  img,
  imgAlt,
  buttonText,
  sidePos,
}) {
  return (
    <div className="section-style">
      <div className="section-container">
        <div
          className="section-row"
          style={{
            display: "flex",
            flexDirection: sidePos === "reverse" ? "row-reverse" : "row",
          }}
        >
          <div className="section-col">
            <div className="text-wrapper">
              <div className="text-line">{lineText}</div>
              <h1 className="text-header">{headerText}</h1>
              <p className="text-desc">{descText}</p>
              <Link to="/sign-up">{buttonText}</Link>
            </div>
          </div>
          <div className="section-col">
            <div className="img-wrapper">
              <img src={img} alt={imgAlt} className="section-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
