import React from 'react'

export default function Cards() {
  return (
    <div>
         <div className="card" style={{"width": "18rem" , "maxHeight":"360px"}} >
   <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <select className='m-2 h-70 bg-success' >
        {
            Array.from(Array(6),(e,i)=>{
                return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })
        }
    </select> */}
    <select  className='m-2 h-70 bg-success'>
        <option key="new" value="New">
         Half
        </option>
        <option key="old" value="Old">
         Full
        </option>
    </select>
   <h5>Total Price</h5>
  </div>
  </div>
    </div>
  )
}
