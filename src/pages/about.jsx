/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/blog/obus.jpg'
import blog2 from '../assets/images/blog/bus.png'
import blog3 from '../assets/images/blog/b1.webp'
import blog4 from '../assets/images/blog/b1.jpeg'
import a6 from '../assets/images/about/a5.png'
//import video from '../assets/images/about/1.mp4'
import Marquee from "react-fast-marquee";
import orders from '../assets/images/icons/icon1.png'
import orders1 from '../assets/images/icons/icon2.png'
import orders2 from '../assets/images/icons/icon3.png'
import orders3 from '../assets/images/icons/icon4.png'
import orders4 from '../assets/images/icons/icon5.png'

import mobileImage from '../assets/images/mobileimage.jpg'
const About = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it's resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the handleResize function initially
    handleResize();

    // Add an event listener to handle screen resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <h1 className="text-white">#Know Us</h1>
              <p className='text-white fs-3'>Get to know us more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={a6} alt="" className='img-fluid p-5' />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1><b>Who are we?</b></h1>
          <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
        </div>
      </div>
    </section>

    <section className="about-app p-5">
  <h2 className='fs-1 text-center mb-6'>About Us</h2>
  <div className="col-12 p-3 col-md-10 mx-auto">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?</p>
  </div>
</section>


    <section className="abouts p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='mb-3'>What our customers say...</h1>
            <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="col-12 col-md-6 p-1">
            <div className="card mb-3">
              <div className="row g-0">
                {/* <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div> */}
                <div className="col-md-8">
                  <div className="card-body">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="card mb-1">
              {/* <div className="row"> */}
                {/* <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div> */}
                <div className="col-md-5">
                  <div className="card-body">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>

         
          
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog3} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 md-3 p-5 gap-3">
            <Marquee className='p-4 slide'>
              <div>
                {/* <img src={orders} alt="" className='img-fluid' /> */}
                <h2 className="card-text mb-3 mx-auto">Fast cancellation</h2>
              </div>
              <div>
                {/* <img src={orders1} alt="" className='img-fluid' /> */}
                <ul typ><h2 className="card-text mb-2">Instant Refund</h2></ul>

              </div>
              <div>
                {/* <img src={orders2} alt="" className='img-fluid' /> */}
                <h2 className="card-text mb-2">Easy &Quick Bus Booking</h2>
              </div>
              <div>
                {/* <img src={orders3} alt="" className='img-fluid' /> */}
                <h2 className="card-text mb-2">24/7 Support</h2>
              </div>
              <div>
                {/* <img src={orders4} alt="" className='img-fluid' /> */}
                <h2 className="card-text mb-2">Bus Offers</h2>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default About