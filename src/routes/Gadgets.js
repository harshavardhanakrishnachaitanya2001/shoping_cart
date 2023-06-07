import React from 'react'
import SectionHeading from '../components/SectionHeading'
import SectionNav from '../components/SectionNav'

const gadgetLinks = [
    { id: 1, linkName: "Mobile" },
    { id: 2, linkName: "Laptop" },
    { id: 3, linkName: "Tablet" },
    { id: 4, linkName: "Camera" },
    { id: 5, linkName: "Headphone" },
    { id: 6, linkName: "Speaker" },
    { id: 7, linkName: "Printer" },
]

const Gadgets = () => {
  return (
    <>
    <SectionHeading heading="Gadgets" />
    <SectionNav links={gadgetLinks} />
    </>
  )
}

export default Gadgets