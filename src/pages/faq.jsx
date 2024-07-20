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
const Faq = () => {

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
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
          <h1 >Frequently Asked Questions</h1>
          <h3 className="card-text mb-3">h</h3>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eu</p>
        </div>
      </div>
    </section>

    {/* <section className="about-app p-5">
  <h2 className='fs-1 text-center mb-6'>About Us</h2>
  <div className="col-12 p-3 col-md-10 mx-auto">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?</p>
  </div>
</section> */}
<div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="faq-wrapper">
                                                            <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Can we choose corporation buses from anywhere?</h5>
                        </div>
                        <div class="faq-content">
                            <p>Orangu ipsum dolor sit amet consectetur adipisicing elit. Sed minima porro aliquid eius laudantium ad quod a corrupti impedit, reiciendis iusto ut aperiam tenetur fuga repellendus tempore necessitatibus omnis libero?</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Can we choose corporation buses from anywhere?</h5>
                        </div>
                        <div class="faq-content">
                            <p>Orangu ipsum dolor sit amet consectetur adipisicing elit. Sed minima porro aliquid eius laudantium ad quod a corrupti impedit, reiciendis iusto ut aperiam tenetur fuga repellendus tempore necessitatibus omnis libero?</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">What is Lorem Ipsum?</h5>
                        </div>
                        <div class="faq-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Where does it come from?</h5>
                        </div>
                        <div class="faq-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">What is Lorem Ipsum?</h5>
                        </div>
                        <div class="faq-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Where can I get some?</h5>
                        </div>
                        <div class="faq-content">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Where can I get some?</h5>
                        </div>
                        <div class="faq-content">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                                                                                                </div>
            </div>
            <div class="col-lg-6">
                <div class="faq-wrapper">
                                                                                                    <div class="faq-item open">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Can we choose corporation buses from anywhere?</h5>
                        </div>
                        <div class="faq-content" style={{display:'block'}}>
                            <p>Orangu ipsum dolor sit amet consectetur adipisicing elit. Sed minima porro aliquid eius laudantium ad quod a corrupti impedit, reiciendis iusto ut aperiam tenetur fuga repellendus tempore necessitatibus omnis libero?</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Why do we use it?</h5>
                        </div>
                        <div class="faq-content">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Where does it come from?</h5>
                        </div>
                        <div class="faq-content" style={{display:'none'}}>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">What is Lorem Ipsum?</h5>
                        </div>
                        <div class="faq-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">What is Lorem Ipsum?</h5>
                        </div>
                        <div class="faq-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Where can I get some?</h5>
                        </div>
                        <div class="faq-content">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                                                                                                                        <div class="faq-item">
                        <div class="faq-title">
                            <span class="icon"></span>
                            <h5 class="title">Why do we use it?</h5>
                        </div>
                        <div class="faq-content">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                                                        </div>
            </div>
        </div>


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

          <div className="col-12 md-2 p-5 g-2">
            <Marquee className='p-4 slide'>
              <div>
                {/* <img src={orders} alt="" className='img-fluid' /> */}
                <h2 className="card-text mb-3 mx-auto">Fast cancellation</h2>
              </div>
              <div>
                {/* <img src={orders1} alt="" className='img-fluid' /> */}
                <h2 className="card-text mb-2">Instant Refund</h2>

              </div>
              <div>
                {/* <img src={orders2} alt="" className='img-fluid' /> */}
                <h2 className="card-text mb-2">Easy &Quick Bus Booking</h2>
              </div>
              <div>
                {/* <img src={orders3} alt="" className='img-fluid' /> */}
                <h2 className="card-text">24/7 Support</h2>
              </div>
              <div>
                {/* <img src={orders4} alt="" className='img-fluid' /> */}
                <h2 className="card-text">Bus Offers</h2>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default Faq;