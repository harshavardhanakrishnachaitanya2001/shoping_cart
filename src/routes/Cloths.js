import React from "react";
import SectionHeading from "../components/SectionHeading";
import SectionNav from "../components/SectionNav";
import { Outlet } from "react-router-dom";
const clothLinks = [
  { id: 1, linkName: "Men" },
  { id: 2, linkName: "Women" },
  { id: 3, linkName: "Children" },
];

const Cloths = () => {
  return (
    <>
      <SectionHeading heading="Cloths" />
      <SectionNav links={clothLinks} />
      <Outlet />
      
    </>
  );
};

export default Cloths;
