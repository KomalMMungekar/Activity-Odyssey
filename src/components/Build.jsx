import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Our club offers a kaleidoscope of activities that cater to a spectrum of interests and passions. 
        Whether you're an adrenaline junkie seeking outdoor adventures like hiking, camping, and rock 
        climbing, an artistic soul yearning for creative outlets such as painting workshops and poetry 
        readings, or someone who enjoys intellectual stimulation 
        through book clubs and debates, we've got something for everyone.
        </p>
        <p>
        We also delve into culinary delights with cooking classes and foodie gatherings, explore 
        the world of fitness with yoga and dance sessions, 
        and embark on cultural journeys through language exchange events and heritage tours.
        </p>
        <p>
        Our diverse range of activities reflects our commitment to providing our members 
        with an ever-evolving tapestry of experiences, 
        ensuring there's always something new and exciting to discover and enjoy.
        </p>
      </div>
      <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        Activity Odyssey were so regular with their progress updates we almost began
        to think they were automated!
      </Blockquote>
    </Section>
  );
};

export default Build;
