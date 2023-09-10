import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
        Our club is founded on a strong set of core values that guide our actions, decisions, 
        and interactions within our community. 
        We hold these values dear as they define the culture and character of our club:
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Inclusivity">
          We are committed to fostering a welcoming and inclusive environment where people 
          from all backgrounds, interests, 
          and abilities can come together to explore their passions and connect with others.
          </GridListItem>
          <GridListItem title="Diversity">
          We celebrate diversity, recognizing that it enriches our club and allows us 
          to offer a wide range of activities that appeal to a broad audience.
          </GridListItem>
          <GridListItem title="Respect">
          We value respect for one another's ideas, opinions, and contributions, 
          ensuring that every member feels heard and valued.
          </GridListItem>
          <GridListItem title="Collaboration">
          Collaboration is at the heart of our club. We believe in the power of teamwork and 
          collective efforts to create memorable experiences for our members.
          </GridListItem>
          <GridListItem title="Empowerment">
          We aim to empower our members to take an active role in shaping the club and 
          their own experiences, encouraging leadership and personal growth.
          </GridListItem>
          <GridListItem title="Learning">
          We view every activity as an opportunity for learning and personal development,
           whether it's acquiring new skills or gaining fresh perspectives.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
