import React from 'react'
import SectionHeading from '../components/SectionHeading'
import SectionNav from '../components/SectionNav'

const stationaryLinks = [
    {
        id:1,
        linkName:"Pens"
    },
    {
        id:2,
        linkName:"Pencils"
    },
    {
        id:3,
        linkName:"Erasers"
    },
    {
        id:4,
        linkName:"Sharpners"
    },
    {
        id:5,
        linkName:"Books"
    },
    {
        id:6,
        linkName:"Scales"
    },
    {
        id:7,
        linkName:"Staplers"
    },
    {
        id:8,
        linkName:"Staples"
    },
    {
        id:9,
        linkName:"Files"
    }
]
const Stationary = () => {
  return (
    <>
        <SectionHeading heading="Stationary" />
        <SectionNav links={stationaryLinks} />
    </>
  )
}

export default Stationary