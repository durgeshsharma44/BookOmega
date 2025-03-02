import React from 'react'
import { Link } from 'react-router-dom'

export default function Subject() {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-secondary" style={{ width: "100%", maxHeight: "360px" }}>
            <img style={{ width: "100%", maxHeight: "257px" }} src="../../images/jee.png" className="card-img-top" alt="JEE" />
            <div className="card-body">
              <Link className="btn" to="/jee">Explore</Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-secondary" style={{ width: "100%", maxHeight: "360px" }}>
            <img style={{ width: "100%", maxHeight: "257px" }} src="../../images/ssc.jpeg" className="card-img-top" alt="SSC" />
            <div className="card-body">
              <Link className="btn" to="/neet">Explore</Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-secondary" style={{ width: "100%", maxHeight: "360px" }}>
            <img style={{ width: "100%", maxHeight: "257px" }} src="../../images/neet.png" className="card-img-top" alt="NEET" />
            <div className="card-body">
              <Link className="btn" to="/ssc">Explore</Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-secondary" style={{ width: "100%", maxHeight: "360px" }}>
            <img style={{ width: "100%", maxHeight: "257px" }} src="../../images/upsc.jpeg" className="card-img-top" alt="UPSC" />
            <div className="card-body">
              <Link className="btn" to="/upsc">Explore</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
