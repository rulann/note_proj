import React from "react"
import './App.css';
import note from './res/note.png'
import bell from './res/bell.png'


function Nav(){
    return(
    <div>
    <ul className='leftnav'>
    <li className='navItem'><a href="./notes"><img src={note} className='icons'/>Notes</a></li>
    <li className='navItem'><a href="./remainders"><img src={bell} className='icons'/>Remainders</a></li>
  </ul>
  </div>
    )
}
export default Nav