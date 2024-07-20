/* eslint-disable no-unused-vars */
import React from 'react'
import orders from '../assets/images/icons/icon1.png'
import orders1 from '../assets/images/icons/icon2.png'
import orders2 from '../assets/images/icons/icon3.png'
import orders3 from '../assets/images/icons/icon4.png'
import orders4 from '../assets/images/icons/icon5.png'
import {wifi} from 'react-icons/cg';
import { BiWifi } from 'react-icons/bi'
//import { TbBottle } from 'react-icons/cg'
import { BiFoodMenu } from 'react-icons/bi'
import {BiBed,} from 'react-icons/bi'
import { FaHeadset} from 'react-icons/fa'
import {GiFoodTruck} from 'react-icons/gi'
import { TbBottle } from 'react-icons/tb'

const hero = () => {
  return <>
    <section className="hero p-4">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 hero-details">
        <div className="row g-4 justify-content-center justify-content-md-between align-items-center">
          <h1 className='text-black text-center'>Our  Niceties</h1>
          <p className='text-black text-center'>Have a look at our popular reason. why you should choose you bus.<br/>
            Just choose a Bus and get a ticket for your great journey!</p>
          <div className="col-7 col-md-5 col-lg-2">
            <div className="card text-center m-auto">
              <BiWifi className='me-1 fs-2 card-img-top img-fluid m-auto' />
              <div className="card-body">
                <p className="card-text mb-0">Wifi</p>
              </div>
            </div>
          </div>

          <div className=" col-7 col-md-5 col-lg-2">
            <div className="card text-center m-auto">
              {/* <img src={orders1} className="card-img-top img-fluid m-auto" alt="Quick Shipping" /> */}
              <BiBed className=' me-1 fs-1 card-img-top img-fluid m-auto' />
              <div className="card-body">
                <p className="card-text mb-0">Pillows</p>
              </div>
            </div>
          </div>

          <div className="col-7 col-md-6 col-lg-2">
            <div className="card text-center m-auto">
              {/* <img src={orders2} className="card-img-top img-fluid m-auto" alt="High Saves" /> */}
              <TbBottle className='me-1 fs-2 card-img-top img-fluid m-auto' />
              <div className="card-body">
                <p className="card-text mb-0">Water Bottles</p>
              </div>
            </div>
          </div>

          <div className="col-7 col-md-5 col-lg-2">
            <div className="card text-center m-auto">
              {/* <img src={orders3} className="card-img-top img-fluid m-auto" alt="24/7 Support" />  */}
               <FaHeadset className='me-3 fs-4 card-img-top img-fluid m-auto' /> 
              <div className="card-body">
                <p className="card-text mb-0">24/7 Support</p>
              </div>
            </div>
          </div>

          <div className="col-7 col-md-5 col-lg-2">
            <div className="card text-center m-auto">
              {/* <img src={orders4} className="card-img-top img-fluid m-auto" alt="Online Orders" /> */}
              <GiFoodTruck className='me-1 fs-2 card-img-top img-fluid m-auto'/>
              <div className="card-body">
                <p className="card-text mb-0">Food&Drinks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>;
}

export default hero