import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import './Naav.css'


function Home() {
  return (
    <>
    <div className="home">
    <Carousel data-bs-theme="light" className='a'>
            
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./src/components/image1.jpg"
          alt="Second slide"
        /></Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./src/components/image2.jpg"
          alt="Third slide"
        /></Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100"
          src="./src/components/image3.jpg"
          alt="Third slide"
        /></Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Home