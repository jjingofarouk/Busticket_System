// import React, { useState } from 'react';
// import './passenger.css'; // Ensure you have your CSS file imported properly

// const PassengerDetails = () => {
//   const [name, setName] = useState('');
//   const [gender, setGender] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission or further processing
//     const passengerDetails = {
//       name,
//       gender,
//       age,
//       email,
//       phone
//     };
//     console.log(passengerDetails); // Just for testing purposes, replace with actual logic
//   };

//   return (
//     <div className="passenger-details-container">
//       <h2>Passenger Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <select
//             id="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             required
//           >
//             <option value="">Select</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="tel"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default PassengerDetails;
// import React, { useState, useEffect } from 'react';
// import './passenger.css';

// const PassengerDetails = () => {
//   const [bookingDetails, setBookingDetails] = useState({});
//   const [formData, setFormData] = useState({
//     name: '',
//     gender: '',
//     age: '',
//     email: '',
//     phone: '',
//   });

//   useEffect(() => {
//     const storedBookingDetails = JSON.parse(localStorage.getItem('booking_details'));
//     if (storedBookingDetails) {
//       setBookingDetails(storedBookingDetails);
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const postData = async () => {
//     const seatNo = parseInt(localStorage.getItem('selected_seat_id'));
//     const busNo = parseInt(localStorage.getItem('selected_busID'));
//     const ticketNo = 200 + seatNo + busNo;
//     localStorage.setItem('ticketNo', ticketNo);

//     const today = new Date();
//     const time = today.getHours() + ' : ' + today.getMinutes();
//     const date = today.getDate() + ' - ' + today.getMonth() + ' - ' + today.getFullYear();
//     const dateTime = time + '  ' + date;

//     const ticketDetails = {
//       ...formData,
//       booked_bus: bookingDetails.booked_bus,
//       booked_seatID: bookingDetails.booked_seatID,
//       booked_price: bookingDetails.tot_price,
//       cur_Dt_time: dateTime,
//       user_points_input: JSON.parse(localStorage.getItem('user_inputs')),
//       ticketNo: ticketNo,
//     };

//     localStorage.setItem('booking_details', JSON.stringify(ticketDetails));

//     const url = `https://json-server-02.onrender.com/Tickets`;
//     await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(ticketDetails),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     StoreValues();
//     window.location.href = "../Payment";
//   };

//   const StoreValues = () => {
//     const { name, age } = formData;
//     const userData = { name, age };
//     localStorage.setItem('user_data', JSON.stringify(userData));
//   };

//   return (
//     <div id="main_container">
//       <div id="container">
//         <div className="passenger_details">
//           <h2>Passenger Details</h2>
//         </div>
//         <div className="passenger_information">
//           <span>Passenger Information</span>
//         </div>
//         <div className="box1">
//           <div className="class1">
//             <span>Passenger 1 &nbsp; | </span>
//             <span className="seat">seat L17</span>
//           </div>
//           <div className="name">
//             <label htmlFor="inputName">Name</label>
//             <input
//               id="inputName"
//               name="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div id="box">
//             <div>
//               <div className="gender">
//                 <label>Gender</label>
//               </div>
//               <div className="gender_bottom">
//                 <div>
//                   <input
//                     className="genderName"
//                     type="radio"
//                     name="gender"
//                     value="M"
//                     checked={formData.gender === 'M'}
//                     onChange={handleInputChange}
//                   />
//                   <label>Male</label>
//                 </div>
//                 <div>
//                   <input
//                     className="genderName"
//                     type="radio"
//                     name="gender"
//                     value="F"
//                     checked={formData.gender === 'F'}
//                     onChange={handleInputChange}
//                   />
//                   <label>Female</label>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="age">
//                 <label className="age1">Age</label>
//                 <input
//                   id="input"
//                   type="text"
//                   name="age"
//                   placeholder="Age"
//                   value={formData.age}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id="contactDetails">
//           <span> &nbsp; <b>Contact Details</b></span>
//         </div>
//         <div id="emailBox">
//           <div className="ticket">Your ticket will be sent to these details</div>
//           <div className="email">
//             <label htmlFor="email">Email ID</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Email addresses"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="phone">
//             <div>
//               <label htmlFor="phoneNumber">Phone</label>
//             </div>
//             <div className="phoneNo">
//               <div className="border">+91 &nbsp;</div>
//               <input
//                 id="phoneNumber"
//                 type="number"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="passenger_info_content_block clearfix">
//           <div className="rucDetails_block">
//             <div>
//               <label className="rucLabel checkbox_css">
//                 <input type="checkbox" id="RUCFeature" className="input-checkbox hide" />
//                 <label htmlFor="RUCFeature" id="RUCFeatureCheckBox" className="checkmark"></label>
//                 <span className="ruc-txt">I have a GST number (optional)?</span>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="whatsApp_block">
//           <label className="checkbox_css">
//             <input type="checkbox" id="whatsAppFeature" className="input-checkbox hide" defaultChecked />
//             <label htmlFor="whatsAppFeature" id="whatsAppFeatureCheckBox" className="checkmark"></label>
//             <span className="subscribe-txt">Send booking details and updates on WhatsApp number</span>
//           </label>
//         </div>
//         <div className="clearfix continue-booking withpptclink">
//           <div className="pptnc-link">
//             By clicking on proceed, I agree that I have read and understood the
//             <a href="/info/termscondition" target="_blank">TnCs</a> and the
//             <a href="/info/privacypolicy" target="_blank">Privacy Policy</a>
//           </div>
//           <div className="pR">
//             <div className="booking-amt-details fl clearfix f-bold">
//               <div className="booking-amt-title fl">Total Amount :</div>
//               <div className="booking-amt fl">
//                 INR<span id="tot_price" className="f-bold">{bookingDetails.tot_price}</span>
//               </div>
//             </div>
//             <div className="button-container fr">
//               { <button
//                 id="submit_btn"
//                 onClick={postData}
//                 className="button main-btn gtm-continueBooking"
//                 style={{backgroundcolor:'green'}}
//               >
//                 Proceed to pay
//               </button> }
//               <button
//   id="submit_btn"
//   onClick={postData}
//   className="button main-btn gtm-continueBooking bg-green"
// >
//   Proceed to pay
// </button>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PassengerDetails;
import React, { useState, useEffect } from 'react';
import './passenger.css';

const PassengerDetails = () => {
  const [bookingDetails, setBookingDetails] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const storedBookingDetails = JSON.parse(localStorage.getItem('booking_details'));
    if (storedBookingDetails) {
      setBookingDetails(storedBookingDetails);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const postData = async () => {
    const seatNo = parseInt(localStorage.getItem('selected_seat_id'));
    const busNo = parseInt(localStorage.getItem('selected_busID'));
    const ticketNo = 200 + seatNo + busNo;
    localStorage.setItem('ticketNo', ticketNo);

    const today = new Date();
    const time = today.getHours() + ' : ' + today.getMinutes();
    const date = today.getDate() + ' - ' + today.getMonth() + ' - ' + today.getFullYear();
    const dateTime = time + '  ' + date;

    const ticketDetails = {
      ...formData,
      booked_bus: bookingDetails.booked_bus,
      booked_seatID: bookingDetails.booked_seatID,
      booked_price: bookingDetails.tot_price,
      cur_Dt_time: dateTime,
      user_points_input: JSON.parse(localStorage.getItem('user_inputs')),
      ticketNo: ticketNo,
    };

    localStorage.setItem('booking_details', JSON.stringify(ticketDetails));

    const url = `https://json-server-02.onrender.com/Tickets`;
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(ticketDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    StoreValues();
    window.location.href = "../Payment";
  };

  const StoreValues = () => {
    const { name, age } = formData;
    const userData = { name, age };
    localStorage.setItem('user_data', JSON.stringify(userData));
  };

  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '24px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', maxWidth: '600px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Passenger Details</h2>
        </div>
        <div style={{ marginBottom: '16px', borderBottom: '1px solid #cbd5e0', paddingBottom: '12px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Passenger Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label htmlFor="inputName" style={{ display: 'block', marginBottom: '4px', fontSize: '0.875rem', color: '#4a5568' }}>Name</label>
              <input
                id="inputName"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d2d6dc', outline: 'none' }}
              />
            </div>
            <div>
              <fieldset style={{ marginBottom: '12px' }}>
                <legend style={{ fontSize: '0.875rem', color: '#4a5568', marginBottom: '4px', fontWeight: 'bold', display: 'block' }}>Gender</legend>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="radio"
                      id="genderM"
                      name="gender"
                      value="M"
                      checked={formData.gender === 'M'}
                      onChange={handleInputChange}
                      style={{ marginRight: '4px', cursor: 'pointer' }}
                    />
                    <label htmlFor="genderM" style={{ fontSize: '0.875rem', color: '#4a5568' }}>Male</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="radio"
                      id="genderF"
                      name="gender"
                      value="F"
                      checked={formData.gender === 'F'}
                      onChange={handleInputChange}
                      style={{ marginRight: '4px', cursor: 'pointer' }}
                    />
                    <label htmlFor="genderF" style={{ fontSize: '0.875rem', color: '#4a5568' }}>Female</label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div>
              <label htmlFor="inputAge" style={{ display: 'block', marginBottom: '4px', fontSize: '0.875rem', color: '#4a5568' }}>Age</label>
              <input
                id="inputAge"
                name="age"
                type="text"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d2d6dc', outline: 'none' }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '16px', borderBottom: '1px solid #cbd5e0', paddingBottom: '12px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Contact Details</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label htmlFor="inputEmail" style={{ display: 'block', marginBottom: '4px', fontSize: '0.875rem', color: '#4a5568' }}>Email ID</label>
              <input
                id="inputEmail"
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d2d6dc', outline: 'none' }}
              />
            </div>
            <div>
              <label htmlFor="inputPhone" style={{ display: 'block', marginBottom: '4px', fontSize: '0.875rem', color: '#4a5568' }}>Phone</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ padding: '8px', borderRadius: '4px 0 0 4px', border: '1px solid #d2d6dc', backgroundColor: '#edf2f7', color: '#4a5568', fontSize: '0.875rem' }}>+91</span>
                <input
                  id="inputPhone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{ flex: '1', padding: '8px', borderRadius: '0 4px 4px 0', border: '1px solid #d2d6dc', outline: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '16px', borderBottom: '1px solid #cbd5e0', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <input
              type="checkbox"
              id="rucCheckbox"
              className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="rucCheckbox" style={{ marginLeft: '4px', fontSize: '0.875rem', color: '#4a5568' }}>I have a GST number (optional)</label>
          </div>
        </div>
        <div style={{ marginBottom: '16px', borderBottom: '1px solid #cbd5e0', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <input
              type="checkbox"
              id="whatsappCheckbox"
              className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded"
              defaultChecked
            />
            <label htmlFor="whatsappCheckbox" style={{ marginLeft: '4px', fontSize: '0.875rem', color: '#4a5568' }}>Send booking details and updates on WhatsApp number</label>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <div style={{ fontSize: '0.875rem', color: '#4a5568' }}>
            By clicking on proceed, I agree that I have read and understood the&nbsp;
            <a href="/info/termscondition" target="_blank" style={{ color: '#3182ce', textDecoration: 'underline' }}>TnCs</a>&nbsp;
            and the&nbsp;
            <a href="/info/privacypolicy" target="_blank" style={{ color: '#3182ce', textDecoration: 'underline' }}>Privacy Policy</a>
          </div>
          <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
            Total Amount : INR<span id="tot_price" style={{ fontWeight: 'bold' }}>{bookingDetails.tot_price}</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <button
            id="submit_btn"
            onClick={postData}
            style={{ backgroundColor: '#48bb78', color: '#ffffff', padding: '12px 24px', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', border: 'none', outline: 'none' }}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;

