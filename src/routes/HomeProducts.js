import React from "react";
import SectionHeading from "../components/SectionHeading";
import SectionNav from "../components/SectionNav";

const HomeProducts = () => {
  const homeLinks = [
    {
      id: 1,
      linkName: "Hall",
    },
    {
      id: 2,
      linkName: "Kitchen",
    },
    {
      id: 3,
      linkName: "Bedroom",
    },
    {
      id: 4,
      linkName: "Kidsroom",
    },
    {
      id: 5,
      linkName: "Bathroom",
    },
    {
      id: 6,
      linkName: "Workspace",
    },
  ];

  return (
    <div>
      <SectionHeading heading="Home space"/>
      <SectionNav links={homeLinks} />
    </div>
  );
};

export default HomeProducts;
