import React from "react";
import Section from "../../components/Section";
import { aboutSectionOne, aboutSectionTwo } from "./AboutData";

export default function AboutPage() {
  return (
    <div>
      <Section {...aboutSectionOne} />
      <Section {...aboutSectionTwo} />
    </div>
  );
}
