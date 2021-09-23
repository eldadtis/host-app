import React from "react";
import Section from "../../components/Section";
import { homeFirstObject } from "./HomeData";

export default function HomePage() {
  return (
    <div>
      <Section {...homeFirstObject} />
    </div>
  );
}
