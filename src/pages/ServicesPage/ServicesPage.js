import React from "react";
import Section from "../../components/Section";
import { servicesSectionOne, servicesSectionTwo } from "./ServicesData";

export default function AboutPage() {
  return (
    <div>
      <Section {...servicesSectionOne} />
      <Section {...servicesSectionTwo} />
    </div>
  );
}
