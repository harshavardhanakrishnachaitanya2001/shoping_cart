import React from 'react'
import { Link } from 'react-router-dom'

const links = [{id:1,linkName:"Men"},{id:2,linkName:"Women"},{id:3,linkName:"Children"}]

const Cloths = () => {
  return (
    <div>
        <nav>
            <ul className='py-2'>
                <li className='flex justify-evenly'>
                    {
                        links.map((link, index) => {
                            return (
                                <Link key={link.id} to={`${link.linkName.toLowerCase()}`} className = "font-semibold text-xl">{link.linkName}</Link>
                            )
                        })
                    }
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Cloths