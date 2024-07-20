// import React from 'react';
// import { Link } from 'react-router-dom';
// import banner from '../assets/busoff.jpeg';
// import banner1 from '../assets/bus4.jpeg';
// import blog1 from '../assets/images/blog/g6.jpeg';
// import blog2 from '../assets/images/blog/g4.jpeg';
// import blog3 from '../assets/images/blog/b1.jpeg';
// import blog4 from '../assets/images/blog/g3.jpeg';
// import Newsletter from '../components/newsletter';
// import Hero from '../components/hero';
// import SearchForm from '../components/searchform';
// import { BiSearch } from 'react-icons/bi';
// import { FaMoneyBillWave, FaTicketAlt } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <>
//       <section className="banner">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-lg-12 col-md-12 col-sm-12">
//               <div className="d-flex flex-column justify-content-center align-items-center text-center">
//                 <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
//                   <div className="carousel-inner">
//                     <div className="back-details">
//                       <h1>Get Your Ticket Online</h1>
//                       <h1>Easy and Safely</h1>
//                       <div className="d-flex flex-column flex-md-row align-items-center mt-1">
//                         <Link to="/" className="btn btn-primary " id="button-link" >Get Ticket Now</Link>
//                         <div className="search-form-wrapper ms-md-3">
//                           <SearchForm />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="working-process padding-top padding-bottom p-5">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-7 col-md-9">
//               <div className="section-header text-center">
//                 <h1 className="title text-black mb-3">Get Your Tickets With Just 3 Steps</h1>
//                 <p>Have a look at our popular reason. Why you should choose our bus. Just book a bus and get a ticket for your great journey!</p>
//               </div>
//             </div>
//           </div>
//           <div className="row g-4 gy-md-5 justify-content-center">
//             <div className="col-lg-4 col-md-6 col-sm-10">
//               <div className="working-process-item">
//                 <div className="thumb-wrapper">
//                   <span>01</span>
//                   <div className="thumb">
//                     <BiSearch />
//                   </div>
//                 </div>
//                 <div className="content">
//                   <h4 className="title">Search Your Bus</h4>
//                   <p>Choose your origin, destination, and journey dates. Search for buses and book your ride.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6 col-sm-10">
//               <div className="working-process-item">
//                 <div className="thumb-wrapper">
//                   <span>02</span>
//                   <div className="thumb">
//                     <FaTicketAlt />
//                   </div>
//                 </div>
//                 <div className="content">
//                   <h4 className="title">Choose The Ticket</h4>
//                   <p>Select your bus and ticket type for a comfortable journey.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6 col-sm-10">
//               <div className="working-process-item">
//                 <div className="thumb-wrapper">
//                   <span>03</span>
//                   <div className="thumb">
//                     <FaMoneyBillWave />
//                   </div>
//                 </div>
//                 <div className="content">
//                   <h4 className="title">Pay Bill</h4>
//                   <p>Complete the payment and enjoy your trip with our secure and easy booking process.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Hero />

//       <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-md-6 d-flex">
//               <div className="card m-auto mb-3">
//                 <div className="row g-0">
//                   <div className="col-md-4">
//                     <img src={banner} className="img-fluid rounded-start" alt="..." />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card-body">
//                       <h5 className="card-title">Best Deals</h5>
//                       <h2 className="card-text mb-2">Get combo offers on first ride.</h2>
//                       <p className="card-text mb-2"><small className="text-body-secondary">Get offers and enjoy your world. Feel happy with our bus service.</small></p>
//                       <Link to="blog">
//                         <button className="mt-4">Learn more</button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 d-flex">
//               <div className="card mb-3">
//                 <div className="row g-0">
//                   <div className="col-md-4">
//                     <img src={banner1} className="img-fluid rounded-start" alt="..." />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card-body">
//                       <h5 className="card-title">Travel Your World with Us</h5>
//                       <h2 className="card-text mb-2">Up to 500 off on Bus Bookings</h2>
//                       <p className="card-text mb-2"><small className="text-body-secondary">Make your trips happy. Choose the best bus for your journey.</small></p>
//                       <Link to="">
//                         <button className="mt-4">Learn more</button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="blogs p-5">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12 text-center">
//               <h1 className="mb-3">What Our Customers Say...</h1>
//               <p className="mb-4">Our customers never miss an opportunity to provide feedback.</p>
//             </div>
//             {[blog1, blog2, blog3, blog4].map((blog, index) => (
//               <div className="col-md-3 col-sm-6 mb-4" key={index}>
//                 <div className="card">
//                   <img src={blog} className="card-img-top img-fluid" alt="..." />
//                   <div className="card-body">
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <Link to="">
//                       <button className="mt-4">Learn more</button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Newsletter />
//     </>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/busoff.jpeg';
import banner1 from '../assets/bus4.jpeg';
import blog1 from '../assets/images/blog/g6.jpeg';
import blog2 from '../assets/images/blog/g4.jpeg';
import blog3 from '../assets/images/blog/b1.jpeg';
import blog4 from '../assets/images/blog/g3.jpeg';
import Newsletter from '../components/newsletter';
import Hero from '../components/hero';
import SearchForm from '../components/searchform';
import { BiSearch } from 'react-icons/bi';
import { FaMoneyBillWave, FaTicketAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="back-details">
                      <h1>Get Your Ticket Online</h1>
                      <h1>Easy and Safely</h1>
                      <div className="d-flex flex-column flex-md-row align-items-center mt-1">
                        <Link to="/buses" className="btn btn-primary small-btn" id="button-link">Get Ticket Now</Link>
                        <div className="search-form-wrapper ms-md-3">
                          <SearchForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="working-process padding-top padding-bottom p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="section-header text-center">
                <h1 className="title text-black mb-3">Get Your Tickets With Just 3 Steps</h1>
                <p>Have a look at our popular reason. Why you should choose our bus. Just book a bus and get a ticket for your great journey!</p>
              </div>
            </div>
          </div>
          <div className="row g-4 gy-md-5 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="working-process-item">
                <div className="thumb-wrapper">
                  <span>01</span>
                  <div className="thumb">
                    <BiSearch />
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Search Your Bus</h4>
                  <p>Choose your origin, destination, and journey dates. Search for buses and book your ride.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="working-process-item">
                <div className="thumb-wrapper">
                  <span>02</span>
                  <div className="thumb">
                    <FaTicketAlt />
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Choose The Ticket</h4>
                  <p>Select your bus and ticket type for a comfortable journey.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="working-process-item">
                <div className="thumb-wrapper">
                  <span>03</span>
                  <div className="thumb">
                    <FaMoneyBillWave />
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Pay Bill</h4>
                  <p>Complete the payment and enjoy your trip with our secure and easy booking process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Hero />

      <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={banner} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Best Deals</h5>
                      <h2 className="card-text mb-2">Get combo offers on first ride.</h2>
                      <p className="card-text mb-2"><small className="text-body-secondary">Get offers and enjoy your world. Feel happy with our bus service.</small></p>
                      <Link to="blog">
                        <button className="mt-3">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={banner1} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Travel Your World with Us</h5>
                      <h2 className="card-text mb-2">Up to 500 off on Bus Bookings</h2>
                      <p className="card-text mb-2"><small className="text-body-secondary">Make your trips happy. Choose the best bus for your journey.</small></p>
                      <Link to="">
                        <button className="mt-3">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-3">What Our Customers Say...</h1>
              <p className="mb-4">Our customers never miss an opportunity to provide feedback.</p>
            </div>
            {[blog1, blog2, blog3, blog4].map((blog, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="card">
                  <img src={blog} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="">
                      <button className="mt-3">Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;


