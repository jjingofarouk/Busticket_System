// // import React, { useEffect, useState } from 'react';
// // import swal from 'sweetalert';

// // // Mock data for ticket details
// // const mockBookingDetails = {
// //   ticketNo: "1234567890",
// //   amount: 500,
// //   passengerCount: 2,
// //   totalAmount: 1000
// // };

// // const PaymentPage = () => {
// //   const [start, setStart] = useState('');
// //   const [end, setEnd] = useState('');
// //   const [bookingDetails, setBookingDetails] = useState(mockBookingDetails); // Initialize with mock data
// //   const [userData, setUserData] = useState({});
// //   const [upiId, setUpiId] = useState('');

// //   useEffect(() => {
// //     const storedUserData = JSON.parse(localStorage.getItem('user_data')) || {};
// //     const from = localStorage.getItem('from');
// //     const to = localStorage.getItem('to');

// //     setUserData(storedUserData);
// //     setStart(from);
// //     setEnd(to);
// //   }, []);

// //   const checkUpiId = (input) => {
// //     return input.includes('@');
// //   };

// //   const handlePayNow = () => {
// //     if (!checkUpiId(upiId)) {
// //       swal({
// //         title: 'Warning!',
// //         text: 'You have entered an invalid UPI ID!',
// //         icon: 'warning',
// //       });
// //     } else {
// //       swal({
// //         title: 'Good job!',
// //         text: `Your Ticket No: ${bookingDetails.ticketNo}`,
// //         icon: 'success',
// //       });
// //       setTimeout(() => {
// //         window.location.href = '/payment'; // Update this path as per your routing
// //       }, 4000);
// //     }
// //   };

// //   return (
// //     <section id="payment-page" style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '24px' }}>
// //       <header className="payment-header" style={{ marginBottom: '24px' }}>
// //         <h1>Payment Details</h1>
// //         <div className="main-header-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
// //           <a href="javascript:void(0)" className="home-redirect redbus-logo"></a>
// //           <div className="fr corner-wrapper">
// //             <div className="fr config-div" tabIndex="0" id="select_box_sign">
// //               <div id="signin_dd">
// //                 <div className="fr signin-block" id="signin-block">
// //                   <i id="i-icon-profile" className="icon-profile-new-unsigned"></i>
// //                   <div id="walletbalance" className="walletBalanceHeader hide">
// //                     <div id="BalanceText"></div>
// //                     <div id="Balance"></div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       <div className="payment-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
// //         <div className="journey-details" style={{ flex: '1', marginRight: '16px' }}>
// //           <div className="timer-container" style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
// //             <div className="timer">
// //               <div className="journey-info" style={{ display: 'flex', alignItems: 'center' }}>
// //                 <div id="city_start">{start}</div>
// //                 <div style={{ margin: '0 8px' }}><span className="icon-right-arrow icon"></span> ↪ </div>
// //                 <div id="city_end">{end}</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="payment-container-right" style={{ flex: '1' }}>
// //           <div className="sc-eJwVdk kRaPqc" style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
// //             <div className="fare-header" style={{ marginBottom: '16px', fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '1px solid #d2d6dc', paddingBottom: '8px' }}><span>Fare Details</span></div>
// //             <div className="fare-body">
// //               <div className="passenger-fare" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
// //                 <div className="desc">Passengers</div>
// //                 <div className="amount">₹ <span>{bookingDetails.amount || 0}</span></div>
// //               </div>
// //               <div className="passenger-count" style={{ marginBottom: '16px' }}>
// //                 <div><span>{bookingDetails.passengerCount || 0}</span> Passenger</div>
// //               </div>
// //             </div>
// //             <div className="fare-footer" style={{ borderTop: '1px solid #d2d6dc', paddingTop: '8px' }}>
// //               <div className="fare-footer-header" style={{ marginBottom: '8px', fontSize: '1.25rem', fontWeight: 'bold' }}><span>Total Amount</span></div>
// //               <div className="fare-footer-body">
// //                 <div className="total-amount"><span className="total">₹ <span>{bookingDetails.totalAmount || 0}</span></span></div>
// //               </div>
// //             </div>
// //             <div className="fare-button" style={{ textAlign: 'center', marginTop: '16px' }}><button className="sc-jSFjdj kXpUFN" style={{ backgroundColor: '#48bb78', color: '#ffffff', padding: '12px 24px', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', border: 'none', outline: 'none' }} onClick={handlePayNow}>Proceed to pay</button></div>
// //           </div>
// //         </div>
// //       </div>

// //       <footer id="commonFooter" style={{ marginTop: '24px', textAlign: 'center' }}>
// //         <div id="commonFooterContent"></div>
// //       </footer>
// //     </section>
// //   );
// // };

// // export default PaymentPage;
// import React, { useEffect, useState } from 'react';
// import swal from 'sweetalert';

// // Mock data for ticket details
// const mockBookingDetails = {
//   ticketNo: "1234567890",
//   amount: 500,
//   passengerCount: 2,
//   totalAmount: 1000
// };

// const PaymentPage = () => {
//   const [start, setStart] = useState('');
//   const [end, setEnd] = useState('');
//   const [bookingDetails, setBookingDetails] = useState(mockBookingDetails); // Initialize with mock data
//   const [userData, setUserData] = useState({});
//   const [upiId, setUpiId] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   useEffect(() => {
//     const storedUserData = JSON.parse(localStorage.getItem('user_data')) || {};
//     const from = localStorage.getItem('from');
//     const to = localStorage.getItem('to');

//     setUserData(storedUserData);
//     setStart(from);
//     setEnd(to);
//   }, []);

//   const checkUpiId = (input) => {
//     return input.includes('@');
//   };

//   const validateEmail = (email) => {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   };

//   const validatePhone = (phone) => {
//     const re = /^\d{10}$/;
//     return re.test(phone);
//   };

//   const handlePayNow = () => {
//     if (!checkUpiId(upiId)) {
//       swal({
//         title: 'Warning!',
//         text: 'You have entered an invalid UPI ID!',
//         icon: 'warning',
//       });
//     } else if (!validateEmail(email)) {
//       swal({
//         title: 'Warning!',
//         text: 'You have entered an invalid Email!',
//         icon: 'warning',
//       });
//     } else if (!validatePhone(phone)) {
//       swal({
//         title: 'Warning!',
//         text: 'You have entered an invalid Phone Number!',
//         icon: 'warning',
//       });
//     } else {
//       swal({
//         title: 'Good job!',
//         text: `Your Ticket No: ${bookingDetails.ticketNo}`,
//         icon: 'success',
//       });
//       setTimeout(() => {
//         window.location.href = '/payment'; // Update this path as per your routing
//       }, 4000);
//     }
//   };

//   return (
//     <section id="payment-page" style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '24px' }}>
//       <header className="payment-header" style={{ marginBottom: '24px' }}>
//         <h1>Payment Details</h1>
//         <div className="main-header-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <a href="javascript:void(0)" className="home-redirect redbus-logo"></a>
//           <div className="fr corner-wrapper">
//             <div className="fr config-div" tabIndex="0" id="select_box_sign">
//               <div id="signin_dd">
//                 <div className="fr signin-block" id="signin-block">
//                   <i id="i-icon-profile" className="icon-profile-new-unsigned"></i>
//                   <div id="walletbalance" className="walletBalanceHeader hide">
//                     <div id="BalanceText"></div>
//                     <div id="Balance"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="payment-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <div className="journey-details" style={{ flex: '1', marginRight: '16px' }}>
//           <div className="timer-container" style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
//             <div className="timer">
//               <div className="journey-info" style={{ display: 'flex', alignItems: 'center' }}>
//                 <div id="city_start">{start}</div>
//                 <div style={{ margin: '0 8px' }}><span className="icon-right-arrow icon"></span> ↪ </div>
//                 <div id="city_end">{end}</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="payment-container-right" style={{ flex: '1' }}>
//           <div className="sc-eJwVdk kRaPqc" style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
//             <div className="fare-header" style={{ marginBottom: '16px', fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '1px solid #d2d6dc', paddingBottom: '8px' }}><span>Fare Details</span></div>
//             <div className="fare-body">
//               <div className="passenger-fare" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
//                 <div className="desc">Passengers</div>
//                 <div className="amount">₹ <span>{bookingDetails.amount || 0}</span></div>
//               </div>
//               <div className="passenger-count" style={{ marginBottom: '16px' }}>
//                 <div><span>{bookingDetails.passengerCount || 0}</span> Passenger</div>
//               </div>
//             </div>
//             <div className="fare-footer" style={{ borderTop: '1px solid #d2d6dc', paddingTop: '8px' }}>
//               <div className="fare-footer-header" style={{ marginBottom: '8px', fontSize: '1.25rem', fontWeight: 'bold' }}><span>Total Amount</span></div>
//               <div className="fare-footer-body">
//                 <div className="total-amount"><span className="total">₹ <span>{bookingDetails.totalAmount || 0}</span></span></div>
//               </div>
//             </div>
//             <div className="fare-inputs" style={{ marginTop: '16px' }}>
//               <div style={{ marginBottom: '16px' }}>
//                 <label htmlFor="upi-id" style={{ display: 'block', marginBottom: '8px' }}>UPI ID</label>
//                 <input type="text" id="upi-id" value={upiId} onChange={(e) => setUpiId(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d2d6dc' }} />
//               </div>
//               <div style={{ marginBottom: '16px' }}>
//                 <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
//                 <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d2d6dc' }} />
//               </div>
//               <div style={{ marginBottom: '16px' }}>
//                 <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px' }}>Phone Number</label>
//                 <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d2d6dc' }} />
//               </div>
//             </div>
//             <div className="fare-button" style={{ textAlign: 'center', marginTop: '16px' }}>
//               <button className="sc-jSFjdj kXpUFN" style={{ backgroundColor: '#48bb78', color: '#ffffff', padding: '12px 24px', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', border: 'none', outline: 'none' }} onClick={handlePayNow}>
//                 Proceed to pay
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer id="commonFooter" style={{ marginTop: '24px', textAlign: 'center' }}>
//         <div id="commonFooterContent"></div>
//       </footer>
//     </section>
//   );
// };

// export default PaymentPage;
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

// Mock data for booking details
const mockBookingDetails = {
  ticketNo: "1234567890",
  amount: 500,
  passengerCount: 2,
  totalAmount: 1000
};

const PaymentPage = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [bookingDetails, setBookingDetails] = useState(mockBookingDetails); // Initialize with mock data
  const [userData, setUserData] = useState({});
  const [upiId, setUpiId] = useState('');

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('user_data')) || {};
    const from = localStorage.getItem('from');
    const to = localStorage.getItem('to');

    setUserData(storedUserData);
    setStart(from);
    setEnd(to);
  }, []);

  const checkUpiId = (input) => {
    return input.includes('@');
  };

  const handlePayNow = () => {
    if (!checkUpiId(upiId)) {
      swal({
        title: 'Warning!',
        text: 'You have entered an invalid UPI ID!',
        icon: 'warning',
      });
    } else {
      swal({
        title: 'Good job!',
        text: `Your Ticket No: ${bookingDetails.ticketNo}`,
        icon: 'success',
      });
      setTimeout(() => {
        window.location.href = '/'; // Update this path as per your routing
      }, 4000);
    }
  };

  return (
    <section id="payment-page" style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '24px' }}>
      <header className="payment-header" style={{ marginBottom: '24px' }}>
        <h1>Payment Details</h1>
        <div className="main-header-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <a href="javascript:void(0)" className="home-redirect redbus-logo"></a>
          <div className="fr corner-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="fr config-div" tabIndex="0" id="select_box_sign">
              <div id="signin_dd">
                <div className="fr signin-block" id="signin-block">
                  <i id="i-icon-profile" className="icon-profile-new-unsigned"></i>
                  <div id="walletbalance" className="walletBalanceHeader hide">
                    <div id="BalanceText"></div>
                    <div id="Balance"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="payment-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="journey-details" style={{ flex: '1', marginRight: '24px' }}>
          <div className="timer-container" style={{ marginBottom: '24px' }}>
            <div className="timer">
              <div></div>
              <div className="journey-info" style={{ display: 'flex', alignItems: 'center' }}>
                <div id="city_start" style={{ marginRight: '8px' }}>{start}</div>
                <div><span className="icon-right-arrow icon"></span> ↪ </div>
                <div id="city_end" style={{ marginLeft: '8px' }}>{end}</div>
              </div>
              <div className="time">
                <div className="timer-text"></div>
                <div><img src="" alt="" /></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="offer-code-container" style={{ marginBottom: '24px' }}>
            <input id="offerCode" name="offerCode" placeholder="Enter offer code" value="" style={{ width: '100%', height: '60px', padding: '12px', borderRadius: '4px', border: '1px solid #d2d6dc' }} />
            <button id="promoButton" style={{ marginLeft: '8px', padding: '12px', borderRadius: '4px', border: 'none', backgroundColor: '#48bb78', color: '#ffffff', cursor: 'pointer' }}>Apply</button>
          </div>

          <div className="wallet-container"></div>

          <div className="info-banner" style={{ marginBottom: '24px' }}>
            <div className="banner-chip" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="banner-img">
                <img src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/safe-payments.svg" width="50px" height="50px" alt="Safe Payments" />
              </div>
              <div className="banner-text" style={{ marginLeft: '8px' }}>
                <div>Safe and secure</div>
                <div>online payments</div>
              </div>
            </div>
            <div className="banner-chip" style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <div className="banner-img">
                <img src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/transactions.svg" style={{ width: '50px', height: '50px' }} alt="Million Transactions" />
              </div>
              <div className="banner-text" style={{ marginLeft: '8px' }}>
                <div>60+ million</div>
                <div>transactions</div>
              </div>
            </div>
            <div className="banner-chip" style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <div className="banner-img">
                <img src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/trust.svg" style={{ width: '50px', height: '50px' }} alt="Reliable" />
              </div>
              <div className="banner-text" style={{ marginLeft: '8px' }}>
                <div>10+ years of</div>
                <div>Trust</div>
              </div>
            </div>
          </div>

          <div className="payment-instruments-container">
            <div className="payment-instruments">
              <div id="pi-title-id" className="pi-title" style={{ marginBottom: '16px', fontSize: '1.5rem', fontWeight: 'bold' }}>Choose Payment Method</div>
              <div className="pi-wrap no-mt">
                <div className="pi-subtitle" style={{ marginBottom: '8px', fontSize: '1rem' }}>UPI PAYMENT USING PHONEPE / GPAY / AMAZON PAY ETC..</div>
                <div className="pi" style={{ marginBottom: '24px' }}>
                  <div className="sc-gqjmRU kwoLib">
                    <div className="sc-VigVT imKSDY">
                      <div className="title-left" style={{ marginBottom: '8px' }}>
                        <div className="sc-htoDjs JOwjJ">
                          <input id="Pay through QR code" type="radio" className="sc-iwsKbI iCLQCa" />
                          <label className="sc-dnqmqq bNDHPM"></label>
                          <div className="radio-label">Pay through QR code</div>
                        </div>
                        <div className="icon-list" style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                          <img className="icon-img" src="https://st.redbus.in/paas/images/v2/GPayNewLogo.png" width="50px" height="50px" alt="GPay" style={{ width: '50px', height: '50px', marginRight: '8px' }} />
                          <img className="icon-img" src="https://st.redbus.in/paas/images/web/v2/upi/phonepe.svg" width="50px" height="50px" alt="PhonePe" style={{ width: '50px', height: '50px', marginRight: '8px' }} />
                          <img className="icon-img" src="https://st.redbus.in/paas/images/mobile/v2/amazonpay_new.png" width="50px" height="50px" alt="Amazon Pay" style={{ width: '50px', height: '50px' }} />
                        </div>
                      </div>
                      <div className="title-right no-padding-right">
                        <div className="step-detail"></div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-gqjmRU kwoLib">
                    <div className="sc-VigVT imKSDY">
                      <div className="title-left" style={{ marginBottom: '8px' }}>
                        <div className="sc-htoDjs iGrraY">
                          <input id="Pay through UPI ID" type="radio" className="sc-iwsKbI iCLQCa" />
                          <label className="sc-dnqmqq bNDHPM"></label>
                          <div className="radio-label">Pay through UPI ID</div>
                        </div>
                      </div>
                      <div className="title-right no-padding-right">
                        <div className="step-detail">
                          <input type="text" id="upi_id" value={upiId} onChange={(e) => setUpiId(e.target.value)} placeholder="Enter UPI ID" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #d2d6dc' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="upiBannerContainer hide">
                  <div className="upiBanner"></div>
                </div>
              </div>
              <div id="addon-root"></div>
            </div>
          </div>
        </div>
        <div className="payment-summary" style={{ width: '300px', padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="payment-details" style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Booking Summary</h3>
            <p>Ticket No: {bookingDetails.ticketNo}</p>
            <p>Amount per Passenger: ${bookingDetails.amount}</p>
            <p>Passenger Count: {bookingDetails.passengerCount}</p>
            <p>Total Amount: ${bookingDetails.totalAmount}</p>
          </div>
          <button onClick={handlePayNow} style={{ width: '100%', padding: '12px', borderRadius: '4px', border: 'none', backgroundColor: '#48bb78', color: '#ffffff', cursor: 'pointer', fontSize: '1rem' }}>Pay Now</button>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;


