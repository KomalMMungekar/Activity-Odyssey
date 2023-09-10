import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our users at the center of everything they want to do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          The genesis of our club can be traced back to a simple yet profound idea: the power of diversity 
          in activities. A group of like-minded individuals, each with their unique interests and passions, 
          came together with the shared belief that life should be a colorful tapestry of experiences. 
          We envisioned a place where members could explore an array of activities, 
          from outdoor adventures to creative pursuits, all under one inclusive umbrella.
          </p>
          <p>
          Inspired by the joy of trying new things and the thrill of pushing our boundaries, 
          we set out to create a community that celebrates curiosity and embraces the boundless 
          opportunities that the world offers. Thus, our club was born, born from a collective desire 
          to infuse excitement into our lives, learn from one another, and build lasting memories along the 
          way. Today, we continue to grow, forging connections and creating stories, one activity at a time.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Happy subclubs" />
          <StatListItem value="52" label="Organsied meet-ups" />
          <StatListItem value="500K+" label="Donation collected" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
