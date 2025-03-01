import React from 'react'

import { Link } from 'react-router-dom'
export default function Subject() {

  

  return (
    <div className='subjects'>
       <div className="card bg-secondary" style={{"width": "18rem" , "maxHeight":"360px"}} >
   <img style={{"width": "100%" , "maxHeight":"257px"}} src="../../images/jee.png" className="card-img-top" alt="..."/>
  <div className="card-body" >
    {/* <button onClick={Selectsubject("jee")} className='btn'>Explore</button> */}
    <Link class="btn" to="/jee">Explore</Link>
  </div>
  </div>

  <div className="card bg-secondary" style={{"width": "18rem" , "maxHeight":"360px"}} >
   <img style={{"width": "100%" , "maxHeight":"257px"}} src="../../images/ssc.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body " >
    {/* <button onClick={Selectsubject("Neet")} className='btn'>Explore</button> */}
    <Link class="btn" to="/neet">Explore</Link>
  </div>
  </div>

  <div className="card bg-secondary" style={{"width": "18rem" , "maxHeight":"360px"}} >
   <img  style={{"width": "100%" , "maxHeight":"257px"}} src="../../images/neet.png" className="card-img-top" alt="..."/>
  <div className="card-body" >
    {/* <button onClick={Selectsubject("upsc")} className='btn'>Explore</button> */}
    <Link class="btn" to="/ssc">Explore</Link>
  </div>
  </div>

  <div className="card bg-secondary" style={{"width": "18rem" , "maxHeight":"360px"}} >
   <img  style={{"width": "100%" , "maxHeight":"257px"}} src="../../images/upsc.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body" >
    {/* <button onClick={Selectsubject("ssc")} className='btn'>Explore</button> */}
    <Link class="btn" to="/upsc">Explore</Link>
  </div>
  </div>


    </div>
  )
}
