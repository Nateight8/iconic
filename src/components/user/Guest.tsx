import React from "react";
import Hero from "../Landing page/hero/Hero";
import Cards from "../Landing page/card section/Cards";
import Section from "../Landing page/sections/Section";
import FrequentlyAQ from "../Landing page/faq/FrequentlyAQ";

type Props = {};

function Guest({}: Props) {
  return (
    <>
      <Hero />
      <Cards />
      <Section />
      <FrequentlyAQ />
    </>
  );
}

export default Guest;
