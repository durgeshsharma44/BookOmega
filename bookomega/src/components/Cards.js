import React from 'react'

export default function Cards() {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card" style={{ width: "100%", maxHeight: "360px" }}>
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Card image"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <select className="m-2 h-70 bg-success">
                <option key="new" value="New">Half</option>
                <option key="old" value="Old">Full</option>
              </select>
              <h5>Total Price</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
