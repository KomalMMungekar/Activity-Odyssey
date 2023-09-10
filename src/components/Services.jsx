import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Our club is dedicated to providing a wide range of services designed to enrich the lives 
        of our members and foster a sense of community. 
        Here are some of the key services we offer:
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Activity Coordination">
            We take the lead in organizing and coordinating a diverse array of activities, 
            from outdoor adventures to creative workshops, 
            ensuring that members have access to a dynamic calendar of events.
            </ListItem>
            <ListItem title="Skill Development">
            Our club offers opportunities for skill development through workshops and training sessions. 
            Whether it's learning a new language, mastering a culinary technique, 
            or honing a creative skill, we provide the resources and expertise.
            </ListItem>
            <ListItem title="Networking and Socialization">
            We facilitate connections among our members, creating an environment where individuals 
            can meet like-minded people, build friendships, and expand their social network.
            </ListItem>
            <ListItem title="Resource Sharing">
            Our club serves as a platform for knowledge exchange, where members can share resources, 
            tips, and recommendations related to their interests and activities.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
