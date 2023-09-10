import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          About halfway through the Build phase, we push each acivity out by 6
          weeks due to a change in{" "}
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>
          . This allows us to increase the enthusiasm a final time before launch.
        </p>
        <p>
          Despite largely using mainstream ideas, most of the{" "}
          <strong className="font-semibold text-neutral-950">activities</strong>{" "}
          on each project takes place in the final 24 hours. The involvement
          time allocated to each client is actually spent keeping him/her in mind!
        </p>
        <p>
          We ensure that the main pages of the site are{" "}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{" "}
          at launch — the auxiliary pages will, of course, be lorem ipusm shells
          which get updated as part of our exorbitant{" "}
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>{" "}
          retainer.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only charge that
          $4 for a month.
        </ListItem>
        <ListItem title="Support">
          Because you all are a family for us!
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
