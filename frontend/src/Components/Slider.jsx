import React from 'react'

const Slider = () => {
  return (
    <>
      <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="../Images/carousel_img-1.webp" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="../Images/carousel_img-2.webp" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../Images/carousel_img-3.webp" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../Images/carousel_img-4.webp" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../Images/carousel_img-5.webp" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../Images/carousel_img-6.webp" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Slider
