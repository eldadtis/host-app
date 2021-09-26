import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import { Button } from "./Button.js";

export default function Section({
  bgColor,
  lineText,
  headerText,
  descText,
  img,
  imgAlt,
  buttonText,
  sidePos,
}) {
  return (
    <div className={bgColor ? "section-style" : "section-style-white"}>
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
              <span className="text-line">{lineText}</span>
              <h1 className="text-header">{headerText}</h1>
              <p className="text-desc">{descText}</p>
              <Link to="/sign-up">
                <Button btnStyle="btn-primary" btnSize="btn-large">
                  {buttonText}
                </Button>
              </Link>
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
