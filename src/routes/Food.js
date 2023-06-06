import React from 'react'
import SectionHeading from "../components/SectionHeading";
import SectionNav from "../components/SectionNav";

const Food = () => {
    const foodLinks = [
        {
            id:1,
            linkName:"Snacks"
        },
        {
            id:2,
            linkName:"Beverages"
        },
        {
            id:3,
            linkName:"Fruits"
        },
        {
            id:4,
            linkName:"Vegetables"
        },
        {
            id:5,
            linkName:"Dairy"
        },
        {
            id:8,
            linkName:"Bakery"
        },
    ]
  return (
    <>
        <SectionHeading heading="Food" />
        <SectionNav links={foodLinks} />
    </>
  )
}

export default Food