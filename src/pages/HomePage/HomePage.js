import React from "react";
import Section from "../../components/Section";
import { homeSectionOne, homeSectionTwo, homeSectionThree } from "./HomeData";

export default function HomePage() {
  return (
    <div>
      <Section {...homeSectionOne} />
      <Section {...homeSectionTwo} />
      <Section {...homeSectionThree} />
    </div>
  );
}
