import React from "react";
import { BlackLine } from "../components/BlackLine/BlackLine";
import "../components/Hero/background.css";
import Car from "../components/Hero/Car";
import {HeroCard} from "../components/Hero/HeroCard";

export const Hero = () => {
  return (
    <>
      <BlackLine />
      <section className="flex md:flex-row bg-primary sm:py-16 py-6 background">
          <HeroCard />
          <Car />

      </section>
    </>
  );
};
