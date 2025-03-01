import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../images/book1.jpg" class="d-block w-100 h-75" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            {/* <div class="container"> */}
               <h3>BookomegA</h3>
              <div class="row height d-flex justify-content-center align-items-center">

                <div class="col-md-6">

                  <div class="form">
                    <i class="fa fa-search"></i>
                    <input type="text" class="form-control form-input" placeholder="Search anything..." />
                  </div>

                </div>

              </div>
{/* 
            </div> */}
          </div>
        </div>
        {/* <div class="carousel-item">
        <img src="../../images/book2.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div> */}
        {/* <div class="carousel-item">
        <img src="../../images/book3.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div> */}
      </div>

    </div>
  )
}
