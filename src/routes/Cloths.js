import React from 'react'
import InnerNav from '../components/SectionNav'
const links = [{id:1,linkName:"Men"},{id:2,linkName:"Women"},{id:3,linkName:"Children"}]

const Cloths = () => {
  return (
    <div>
        <InnerNav links = {links}/>
    </div>
  )
}

export default Cloths