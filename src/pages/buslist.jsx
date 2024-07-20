// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './buslist.css'; // Make sure to create and import the CSS file

// // const BusList = () => {
// //   const [buses, setBuses] = useState([]);
// //   const [filters, setFilters] = useState({
// //     liveTracking: false,
// //     before6am: false,
// //     morning: false,
// //     evening: false,
// //     after6pm: false,
// //     seater: false,
// //     sleeper: false,
// //     ac: false,
// //     seatAvailability: false,
// //     arrivalBefore6am: false,
// //     arrivalMorning: false,
// //     arrivalEvening: false,
// //     arrivalAfter6pm: false,
// //   });

// //   useEffect(() => {
// //     const fetchBuses = async () => {
// //       try {
// //         const res = await axios.get('https://json-server-02.onrender.com/redbus');
// //         setBuses(res.data);
// //       } catch (err) {
// //         console.error('Error fetching bus details:', err);
// //       }
// //     };

// //     fetchBuses();
// //   }, []);

// //   const handleFilterChange = (key) => {
// //     setFilters((prevFilters) => ({
// //       ...prevFilters,
// //       [key]: !prevFilters[key],
// //     }));
// //   };

// //   const filteredBuses = buses.filter((bus) => {
// //     // Implement your filtering logic here
// //     return true; // Placeholder logic; update as per your requirements
// //   });

// //   return (
// //     <div className="bus-list-container">
// //       <div className="filters-container">
// //         <h6 className="filter-header">FILTER</h6>
// //         <hr className="filter-hr" />
// //         <div className="filter-section">
// //           <p className="filter-title">Live Tracking (15)</p>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('liveTracking')} checked={filters.liveTracking} /> Live Tracking
// //           </label>
// //         </div>
// //         <hr className="filter-hr" />
// //         <div className="filter-section">
// //           <p className="filter-title">DEPARTURE TIME</p>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('before6am')} checked={filters.before6am} /> Before 6 am
// //           </label>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('morning')} checked={filters.morning} /> 6 am to 12 pm
// //           </label>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('evening')} checked={filters.evening} /> 12 pm to 6 pm
// //           </label>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('after6pm')} checked={filters.after6pm} /> After 6 pm
// //           </label>
// //         </div>
// //         <div className="filter-section">
// //           <p className="filter-title">BUS TYPES</p>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('seater')} checked={filters.seater} /> SEATER
// //           </label>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('sleeper')} checked={filters.sleeper} /> SLEEPER
// //           </label>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('ac')} checked={filters.ac} /> AC
// //           </label>
// //         </div>
// //         <div className="filter-section">
// //           <p className="filter-title">SEAT AVAILABILITY</p>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('seatAvailability')} checked={filters.seatAvailability} /> Single Seats
// //           </label>
// //         </div>
// //         <div className="filter-section">
// //           <p className="filter-title">ARRIVAL TIME</p>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('arrivalBefore6am')} checked={filters.arrivalBefore6am} /> Before 6 am
// //           </label>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('arrivalMorning')} checked={filters.arrivalMorning} /> 6 am to 12 pm
// //           </label>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('arrivalEvening')} checked={filters.arrivalEvening} /> 12 pm to 6 pm
// //           </label>
// //           <label>
// //             <input type="checkbox" onChange={() => handleFilterChange('arrivalAfter6pm')} checked={filters.arrivalAfter6pm} /> After 6 pm
// //           </label>
// //         </div>
// //         <div className="filter-section">
// //           <p className="filter-title">BOARDING POINT</p>
// //           <input type="text" placeholder="BOARDING POINT" />
// //         </div>
// //         <div className="filter-section">
// //           <p className="filter-title">DROPPING POINT</p>
// //           <input type="text" placeholder="DROPPING POINT" />
// //         </div>
// //         <div className="filter-section">
// //           <p className="filter-title">OPERATOR</p>
// //           <input type="text" placeholder="OPERATOR" />
// //         </div>
// //         <div className="filter-section">
// //           <p className="filter-title">AMENITIES</p>
// //           <ul className="amenities">
// //             <li>WIFI (23)</li>
// //             <li>Water Bottle (23)</li>
// //             <li>Blankets (4)</li>
// //             <li>Charging Point (4)</li>
// //             <li>Movie (0)</li>
// //             <li>Track My Bus (4)</li>
// //             <li>Emergency Contact Nu... (1)</li>
// //             <li>Toilet (1)</li>
// //           </ul>
// //         </div>
// //       </div>
// //       <div className="bus-details-container">
// //         <div className="header-images">
// //           <img src="https://st.redbus.in/Images//ReddealsCards/IND/primo1_MainCard.png" alt="" />
// //           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/Returnonward_MainCard.png" alt="" />
// //           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/FlexiTicket_MainCard.png" alt="" />
// //           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/2_10_MainCard.png" alt="" />
// //           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/4_10_MainCard.png" alt="" />
// //         </div>
// //         <div className="heading-line">
// //           <p className="heading-text">
// //             <i className="fa-solid fa-shield-virus"></i>All bus ratings include safety as a major factor
// //           </p>
// //           <hr className="heading-hr" />
// //         </div>
// //         <div className="details-sorting-heading">
// //           <p className="span-bold">
// //             <span className="bold">{filteredBuses.length}</span> Buses <span className="bold">found</span>
// //           </p>
// //           <p className="bold">SORT BY:</p>
// //           <p className="p">Departure <span className="p"></span></p>
// //           <p className="p">Duration</p>
// //           <p className="p">Arrival</p>
// //           <p className="p">Ratings</p>
// //           <p className="p">Fare</p>
// //           <p className="p">Seats Available</p>
// //           <hr className="details-hr" />
// //         </div>
// //         <div className="bus-details-section">
// //           {filteredBuses.map((bus) => (
// //             <div key={bus.id} className="bus-details-box">
// //               <div className="bus-info">
// //                 <p className="bus-name">{bus.bus_name}</p>
// //                 <p className="bus-company">{bus.company}</p>
// //                 <p className="bus-time">
// //                   <span>In: {bus.time_in}</span> - <span>Out: {bus.time_out}</span>
// //                 </p>
// //                 <p className="bus-rating">Rating: {bus.rating}</p>
// //                 <p className="bus-price">Price: ${bus.price}</p>
// //               </div>
// //               <button className="book-now-btn">Book Now</button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BusList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './buslist.css'; // Make sure to create and import the CSS file

// const BusList = () => {
//   const [buses, setBuses] = useState([]);
//   const [filters, setFilters] = useState({
//     liveTracking: false,
//     departureTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//     busTypes: {
//       seater: false,
//       sleeper: false,
//       ac: false,
//     },
//     seatAvailability: false,
//     arrivalTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//   });

//   useEffect(() => {
//     const fetchBuses = async () => {
//       try {
//         const res = await axios.get('https://json-server-02.onrender.com/redbus');
//         setBuses(res.data);
//       } catch (err) {
//         console.error('Error fetching bus details:', err);
//       }
//     };

//     fetchBuses();
//   }, []);

//   const handleFilterChange = (category, key) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [category]: {
//         ...prevFilters[category],
//         [key]: !prevFilters[category][key],
//       },
//     }));
//   };

//   const filteredBuses = buses.filter(bus => {
//     // Add filter logic here
//     // For simplicity, we are returning all buses
//     return true;
//   });

//   return (
//     <div id="container">
//       <div className="left_section">
//         <h6 id="p">FILTER</h6>
//         <hr />
//         <div id="heading_line" className="filter_div">
//           <p id="p1">Live Tracking (15)</p>
//         </div>
//         <hr />
//         <div className="filter_div">
//           <p id="p2">DEPARTURE TIME</p>
//           <label>
//             <input type="checkbox" value="" id="before-6am" onChange={() => handleFilterChange('departureTime', 'before6am')} />Before 6 am (<span id="span1">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="morning" onChange={() => handleFilterChange('departureTime', 'morning')} />6 am to 12 pm (<span id="span2">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="evening" onChange={() => handleFilterChange('departureTime', 'evening')} />12 pm to 6 pm (<span id="span3">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('departureTime', 'after6pm')} />After 6 pm (0)
//           </label>
//         </div>
//         <div className="filter_div">
//           <p id="p2">BUS TYPES</p>
//           <label>
//             <input type="checkbox" value="" id="seater" onChange={() => handleFilterChange('busTypes', 'seater')} />SEATER (<span id="span4">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="sleeper" onChange={() => handleFilterChange('busTypes', 'sleeper')} />SLEEPER (<span id="span5">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="ac" onChange={() => handleFilterChange('busTypes', 'ac')} />AC (23)
//           </label>
//         </div>
//         <div className="filter_div">
//           <p id="p2">SEAT AVAILABILITY</p>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('seatAvailability', '')} />Single Seats (9)
//           </label>
//         </div>
//         <div className="filter_div">
//           <p id="p2">ARRIVAL TIME</p>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'before6am')} />Before 6 am (5)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'morning')} />6 am to 12 pm (18)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'evening')} />12 pm to 6 pm (0)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'after6pm')} />After 6 pm (0)
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">BOARDING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="BOARDING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">DROPPING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="DROPPING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">OPERATOR</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="OPERATOR" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">AMENITIES</p>
//           <ul className="amenities">
//             <li>WIFI (23)</li>
//             <li>Water Bottle (23)</li>
//             <li>Blankets (4)</li>
//             <li>Charging Point (4)</li>
//             <li>Movie (0)</li>
//             <li>Track My Bus (4)</li>
//             <li>Emergency Contact Nu... (1)</li>
//             <li>Toilet (1)</li>
//           </ul>
//         </div>
//       </div>
//       <div className="right_section">
//         <ul id="header_images">
//           <img src="https://st.redbus.in/Images//ReddealsCards/IND/primo1_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/Returnonward_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/FlexiTicket_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/2_10_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/4_10_MainCard.png" alt="" />
//         </ul>
//         <div id="heading_line">
//           <p id="p4">
//             <i className="fa-solid fa-shield-virus"></i>All bus ratings include safety as a major factor
//           </p>
//           <hr className="heading_hr" />
//         </div>
//         <div id="details_sorting_heading">
//           <p id="p-span">
//             <span id="no_of_buses" className="bold">{filteredBuses.length}</span> Buses <span id="span" className="bold">found</span>
//           </p>
//           <p className="bold">SORT BY:</p>
//           <p id="departure" className="p">Departure <span id="order_departure_icon" className="p"></span></p>
//           <p id="duration" className="p">Duration</p>
//           <p id="arrival" className="p">Arrival</p>
//           <p id="rating" className="p">Ratings</p>
//           <p id="price" className="p">Fare</p>
//           <p id="seat" className="p">Seats Available</p>
//           <hr />
//         </div>
//         <div id="bus_details_section">
//           {filteredBuses.map((bus) => (
//             <div key={bus.id} className="bus_details_box">
//               <div className="bus_info">
//                 <p className="bus_name">{bus.bus_name}</p>
//                 <p className="bus_company">{bus.company}</p>
//                 <p className="bus_time">
//                   <span>In: {bus.time_in}</span> - <span>Out: {bus.time_out}</span>
//                 </p>
//                 <p className="bus_rating">Rating: {bus.rating}</p>
//                 <p className="bus_price">Price: ${bus.price}</p>
//               </div>
//               <button className="book_now_btn">Book Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './buslist.css'; // Make sure to create and import the CSS file

// const BusList = () => {
//   const [buses, setBuses] = useState([]);
//   const [filters, setFilters] = useState({
//     liveTracking: false,
//     departureTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//     busTypes: {
//       seater: false,
//       sleeper: false,
//       ac: false,
//     },
//     seatAvailability: false,
//     arrivalTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//   });

//   useEffect(() => {
//     const fetchBuses = async () => {
//       try {
//         const res = await axios.get('https://json-server-02.onrender.com/redbus');
//         setBuses(res.data);
//       } catch (err) {
//         console.error('Error fetching bus details:', err);
//       }
//     };

//     fetchBuses();
//   }, []);

//   const handleFilterChange = (category, key) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [category]: {
//         ...prevFilters[category],
//         [key]: !prevFilters[category][key],
//       },
//     }));
//   };

//   const filteredBuses = buses.filter(bus => {
//     // Add filter logic here
//     // For simplicity, we are returning all buses
//     return true;
//   });

//   return (
//     <div id="container">
//       <div className="left_section">
//         <h6 id="p">FILTER</h6>
//         <hr />
//         <div id="heading_line" className="filter_div">
//           <p id="p1">Live Tracking (15)</p>
//         </div>
//         <hr />
//         <div className="filter_div column">
//           <p id="p2">DEPARTURE TIME</p>
//           <label>
//             <input type="checkbox" value="" id="before-6am" onChange={() => handleFilterChange('departureTime', 'before6am')} />Before 6 am (<span id="span1">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="morning" onChange={() => handleFilterChange('departureTime', 'morning')} />6 am to 12 pm (<span id="span2">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="evening" onChange={() => handleFilterChange('departureTime', 'evening')} />12 pm to 6 pm (<span id="span3">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('departureTime', 'after6pm')} />After 6 pm (0)
//           </label>
//         </div>
//         <div className="filter_div column">
//           <p id="p2">BUS TYPES</p>
//           <label>
//             <input type="checkbox" value="" id="seater" onChange={() => handleFilterChange('busTypes', 'seater')} />SEATER (<span id="span4">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="sleeper" onChange={() => handleFilterChange('busTypes', 'sleeper')} />SLEEPER (<span id="span5">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="ac" onChange={() => handleFilterChange('busTypes', 'ac')} />AC (23)
//           </label>
//         </div>
//         <div className="filter_div column">
//           <p id="p2">SEAT AVAILABILITY</p>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('seatAvailability', '')} />Single Seats (9)
//           </label>
//         </div>
//         <div className="filter_div column">
//           <p id="p2">ARRIVAL TIME</p>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'before6am')} />Before 6 am (5)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'morning')} />6 am to 12 pm (18)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'evening')} />12 pm to 6 pm (0)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'after6pm')} />After 6 pm (0)
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">BOARDING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="BOARDING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">DROPPING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="DROPPING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">OPERATOR</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="OPERATOR" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">AMENITIES</p>
//           <ul className="amenities">
//             <li>WIFI (23)</li>
//             <li>Water Bottle (23)</li>
//             <li>Blankets (4)</li>
//             <li>Charging Point (4)</li>
//             <li>Movie (0)</li>
//             <li>Track My Bus (4)</li>
//             <li>Emergency Contact Nu... (1)</li>
//             <li>Toilet (1)</li>
//           </ul>
//         </div>
//       </div>
//       <div className="right_section">
//         <ul id="header_images">
//           <img src="https://st.redbus.in/Images//ReddealsCards/IND/primo1_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/Returnonward_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/FlexiTicket_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/2_10_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/4_10_MainCard.png" alt="" />
//         </ul>
//         <div id="heading_line">
//           <p id="p4">
//             <i className="fa-solid fa-shield-virus"></i>All bus ratings include safety as a major factor
//           </p>
//           <hr className="heading_hr" />
//         </div>
//         <div id="details_sorting_heading">
//           <p id="p-span">
//             <span id="no_of_buses" className="bold">{filteredBuses.length}</span> Buses <span id="span" className="bold">found</span>
//           </p>
//           <p className="bold">SORT BY:</p>
//           <p id="departure" className="p">Departure <span id="order_departure_icon" className="p"></span></p>
//           <p id="duration" className="p">Duration</p>
//           <p id="arrival" className="p">Arrival</p>
//           <p id="rating" className="p">Ratings</p>
//           <p id="price" className="p">Fare</p>
//           <p id="seat" className="p">Seats Available</p>
//           <hr />
//         </div>
//       </div>  <div className="right_section">
//         {/* Cards for bus details */}
//         <div id="bus_details_section">
//           {filteredBuses.map((bus) => (
//             <div key={bus.id} className="bus_details_box">
//               <div className="bus_info">
//                 <p className="bus_name">{bus.bus_name}</p>
//                 <p className="bus_company">{bus.company}</p>
//                 <p className="bus_time">
//                   <span>In: {bus.time_in}</span> - <span>Out: {bus.time_out}</span>
//                 </p>
//                 <p className="bus_rating">Rating: {bus.rating}</p>
//                 <p className="bus_price">Price: ${bus.price}</p>
//               </div>
//               <button className="book_now_btn">Book Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default BusList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ShowSeatsModal from './showseat';
// import './buslist.css'; // Make sure to create and import the CSS file

// const BusList = () => {
//   const [buses, setBuses] = useState([]);
//   const [filters, setFilters] = useState({
//     liveTracking: false,
//     departureTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//     busTypes: {
//       seater: false,
//       sleeper: false,
//       ac: false,
//     },
//     seatAvailability: false,
//     arrivalTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//   });
//   const [selectedBus, setSelectedBus] = useState(null); // State to store the selected bus
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   useEffect(() => {
//     const fetchBuses = async () => {
//       try {
//         const res = await axios.get('https://json-server-02.onrender.com/redbus');
//         setBuses(res.data);
//       } catch (err) {
//         console.error('Error fetching bus details:', err);
//       }
//     };

//     fetchBuses();
//   }, []);

//   const handleFilterChange = (category, key) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [category]: {
//         ...prevFilters[category],
//         [key]: !prevFilters[category][key],
//       },
//     }));
//   };

//   const handleBookNow = (bus) => {
//     setSelectedBus(bus); // Set the selected bus when "Book Now" is clicked
//     setShowModal(true); // Open the modal
//   };

//   const closeModal = () => {
//     setShowModal(false); // Close the modal
//   };

//   const filteredBuses = buses.filter(bus => {
//     // Add filter logic here if needed
//     return true; // For simplicity, returning all buses
//   });

//   return (
//     <div id="container">
//       <div className="left_section">
//         <h6 id="p">FILTER</h6>
//         <hr />
//         <div id="heading_line" className="filter_div">
//           <p id="p1">Live Tracking (15)</p>
//         </div>
//         <hr />
//         <div className="filter_div column">
//           <p id="p2">DEPARTURE TIME</p>
//           <label>
//             <input type="checkbox" value="" id="before-6am" onChange={() => handleFilterChange('departureTime', 'before6am')} />Before 6 am (<span id="span1">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="morning" onChange={() => handleFilterChange('departureTime', 'morning')} />6 am to 12 pm (<span id="span2">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="evening" onChange={() => handleFilterChange('departureTime', 'evening')} />12 pm to 6 pm (<span id="span3">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('departureTime', 'after6pm')} />After 6 pm (0)
//           </label>
//         </div>
//         <div className="filter_div column">
//           <p id="p2">BUS TYPES</p>
//           <label>
//             <input type="checkbox" value="" id="seater" onChange={() => handleFilterChange('busTypes', 'seater')} />SEATER (<span id="span4">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="sleeper" onChange={() => handleFilterChange('busTypes', 'sleeper')} />SLEEPER (<span id="span5">0</span>)
//           </label>
//           <label>
//             <input type="checkbox" value="" id="ac" onChange={() => handleFilterChange('busTypes', 'ac')} />AC (23)
//           </label>
//         </div>
//         <div className="filter_div column">
//           <p id="p2">SEAT AVAILABILITY</p>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('seatAvailability', '')} />Single Seats (9)
//           </label>
//         </div>
//         <div className="filter_div column">
//           <p id="p2">ARRIVAL TIME</p>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'before6am')} />Before 6 am (5)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'morning')} />6 am to 12 pm (18)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'evening')} />12 pm to 6 pm (0)
//           </label>
//           <label>
//             <input type="checkbox" value="" onChange={() => handleFilterChange('arrivalTime', 'after6pm')} />After 6 pm (0)
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">BOARDING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="BOARDING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">DROPPING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="DROPPING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">OPERATOR</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="OPERATOR" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p id="p3">AMENITIES</p>
//           <ul className="amenities">
//             <li>WIFI (23)</li>
//             <li>Water Bottle (23)</li>
//             <li>Blankets (4)</li>
//             <li>Charging Point (4)</li>
//             <li>Movie (0)</li>
//             <li>Track My Bus (4)</li>
//             <li>Emergency Contact Nu... (1)</li>
//             <li>Toilet (1)</li>
//           </ul>
//         </div>
//       </div>
//       <div className="right_section">
//         <ul id="header_images">
//           <img src="https://st.redbus.in/Images//ReddealsCards/IND/primo1_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/Returnonward_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/FlexiTicket_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/2_10_MainCard.png" alt="" />
//           <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/4_10_MainCard.png" alt="" />
//         </ul>
//         <div id="heading_line">
//           <p id="p4">
//             <i className="fa-solid fa-shield-virus"></i>All bus ratings include safety as a major factor
//           </p>
//           <hr className="heading_hr" />
//         </div>
//         <div id="details_sorting_heading">
//           <p id="p-span">
//             <span id="no_of_buses" className="bold">{filteredBuses.length}</span> Buses <span id="span" className="bold">found</span>
//           </p>
//           <p className="bold">SORT BY:</p>
//           <p id="departure" className="p">Departure <span id="order_departure_icon" className="p"></span></p>
//           <p id="duration" className="p">Duration</p>
//           <p id="arrival" className="p">Arrival</p>
//           <p id="rating" className="p">Ratings</p>
//           <p id="price" className="p">Fare</p>
//           <p id="seat" className="p">Seats Available</p>
//           <hr />
//         </div>
//         <div id="bus_details_section">
//           {filteredBuses.map((bus) => (
//             <div key={bus.id} className="bus_details_box">
//               <div className="bus_info">
//                 <p className="bus_name">{bus.bus_name}</p>
//                 <p className="bus_company">{bus.company}</p>
//                 <p className="bus_time">
//                   <span>In: {bus.time_in}</span> - <span>Out: {bus.time_out}</span>
//                 </p>
//                 <p className="bus_rating">Rating: {bus.rating}</p>
//                 <p className="bus_price">Price: ${bus.price}</p>
//               </div>
//               <button className="book_now_btn" onClick={() => handleBookNow(bus)}>Book Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* ShowSeatsModal modal */}
//       {/* Add ShowSeatsModal component here */}
//       {selectedBus && (
//         <ShowSeatsModal isOpen={showModal} onClose={closeModal} busDetails={selectedBus} />
//       )}
//     </div>
//   );
// };

// export default BusList;
// 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ShowSeatsModal from './showseat'; // Adjust path as needed
// import './buslist.css'; // Ensure this file exists and is correctly imported

// const BusList = () => {
//   const [buses, setBuses] = useState([]);
//   const [filters, setFilters] = useState({
//     liveTracking: false,
//     departureTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//     busTypes: {
//       seater: false,
//       sleeper: false,
//       ac: false,
//     },
//     seatAvailability: false,
//     arrivalTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//   });
//   const [selectedBus, setSelectedBus] = useState(null); // State to store the selected bus
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   useEffect(() => {
//     const fetchBuses = async () => {
//       try {
//         const res = await axios.get('https://json-server-02.onrender.com/redbus');
//         setBuses(res.data);
//       } catch (err) {
//         console.error('Error fetching bus details:', err);
//       }
//     };

//     fetchBuses();
//   }, []);

//   const handleFilterChange = (category, key) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [category]: {
//         ...prevFilters[category],
//         [key]: !prevFilters[category][key],
//       },
//     }));
//   };

//   const handleBookNow = (bus) => {
//     setSelectedBus(bus); // Set the selected bus when "Book Now" is clicked
//     setShowModal(true); // Open the modal
//   };

//   const closeModal = () => {
//     setShowModal(false); // Close the modal
//   };

//   const filteredBuses = buses.filter(bus => {
//     // Add filter logic here if needed
//     return true; // For simplicity, returning all buses
//   });

//   return (
//     <div id="container">
//       {/* Left Sidebar with Filters */}
//       <div className="left_section">
//         <h6>FILTER</h6>
//         <hr />
//         <div className="filter_div">
//           <p>Live Tracking (15)</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('liveTracking', '')}
//             />
//           </label>
//         </div>
//         <hr />
//         <div className="filter_div">
//           <p>DEPARTURE TIME</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('departureTime', 'before6am')}
//             />
//             Before 6 am (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('departureTime', 'morning')}
//             />
//             6 am to 12 pm (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('departureTime', 'evening')}
//             />
//             12 pm to 6 pm (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('departureTime', 'after6pm')}
//             />
//             After 6 pm (0)
//           </label>
//         </div>
//         <div className="filter_div">
//           <p>BUS TYPES</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('busTypes', 'seater')}
//             />
//             SEATER (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('busTypes', 'sleeper')}
//             />
//             SLEEPER (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('busTypes', 'ac')}
//             />
//             AC (23)
//           </label>
//         </div>
//         <div className="filter_div">
//           <p>SEAT AVAILABILITY</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('seatAvailability', '')}
//             />
//             Single Seats (9)
//           </label>
//         </div>
//         <div className="filter_div">
//           <p>ARRIVAL TIME</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('arrivalTime', 'before6am')}
//             />
//             Before 6 am (5)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('arrivalTime', 'morning')}
//             />
//             6 am to 12 pm (18)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('arrivalTime', 'evening')}
//             />
//             12 pm to 6 pm (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('arrivalTime', 'after6pm')}
//             />
//             After 6 pm (0)
//           </label>
//         </div>
//         <div className="points_div">
//           <p>BOARDING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="BOARDING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p>DROPPING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="DROPPING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p>OPERATOR</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="OPERATOR" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p>AMENITIES</p>
//           <ul className="amenities">
//             <li>WIFI (23)</li>
//             <li>Water Bottle (23)</li>
//             <li>Blankets (4)</li>
//             <li>Charging Point (4)</li>
//             <li>Movie (0)</li>
//             <li>Track My Bus (4)</li>
//             <li>Emergency Contact Nu... (1)</li>
//             <li>Toilet (1)</li>
//           </ul>
//         </div>
//       </div>

//       {/* Right Section with Bus Tickets */}
//       <div className="right_section">
//         <div id="details_sorting_heading">
//           <p id="p-span">
//             <span id="no_of_buses" className="bold">{filteredBuses.length}</span> Buses <span className="bold">found</span>
//           </p>
//           <div className="sorting">
//             <p className="bold">SORT BY:</p>
//             <p id="departure" className="p">Departure <span id="order_departure_icon" className="p"></span></p>
//             <p id="duration" className="p">Duration</p>
//             <p id="arrival" className="p">Arrival</p>
//             <p id="rating" className="p">Ratings</p>
//             <p id="price" className="p">Fare</p>
//             <p id="seat" className="p">Seats Available</p>
//           </div>
//           <hr />
//         </div>
//         <div id="bus_details_section">
//           {filteredBuses.map((bus) => (
//             <div key={bus.id} className="bus_details_box">
//               <div className="bus_info">
//                 <p className="bus_name">{bus.bus_name}</p>
//                 <p className="bus_company">{bus.company}</p>
//                 <p className="bus_time">
//                   <span>In: {bus.time_in}</span> - <span>Out: {bus.time_out}</span>
//                 </p>
//                 <p className="bus_rating">Rating: {bus.rating}</p>
//                 <p className="bus_price">Price: ${bus.price}</p>
//               </div>
//               <button className="book_now_btn" onClick={() => handleBookNow(bus)}>
//                 Book Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ShowSeatsModal modal */}
//       {selectedBus && (
//         <ShowSeatsModal isOpen={showModal} onClose={closeModal} busDetails={selectedBus} />
//       )}
//     </div>
//   );
// };

// export default BusList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ShowSeatsModal from './showseat'; // Adjust path as needed
// import './buslist.css'; // Ensure this file exists and is correctly imported

// const BusList = () => {
//   const [buses, setBuses] = useState([]);
//   const [filters, setFilters] = useState({
//     liveTracking: false,
//     departureTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//     busTypes: {
//       seater: false,
//       sleeper: false,
//       ac: false,
//     },
//     seatAvailability: false,
//     arrivalTime: {
//       before6am: false,
//       morning: false,
//       evening: false,
//       after6pm: false,
//     },
//   });
//   const [selectedBus, setSelectedBus] = useState(null); // State to store the selected bus
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   useEffect(() => {
//     const fetchBuses = async () => {
//       try {
//         const res = await axios.get('https://json-server-02.onrender.com/redbus');
//         setBuses(res.data);
//       } catch (err) {
//         console.error('Error fetching bus details:', err);
//       }
//     };

//     fetchBuses();
//   }, []);

//   const handleFilterChange = (category, key) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [category]: {
//         ...prevFilters[category],
//         [key]: !prevFilters[category][key],
//       },
//     }));
//   };

//   const handleBookNow = (bus) => {
//     setSelectedBus(bus); // Set the selected bus when "Book Now" is clicked
//     setShowModal(true); // Open the modal
//   };

//   const closeModal = () => {
//     setShowModal(false); // Close the modal
//   };

//   const filteredBuses = buses.filter(bus => {
//     // Add filter logic here if needed
//     return true; // For simplicity, returning all buses
//   });

//   return (
//     <div className="container-xxl">
//       {/* Left Sidebar with Filters */}
//       <div className="left_section">
//         <h6>FILTER</h6>
//         <hr />
//         <div className="filter_div">
//           <p>Live Tracking (15)</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('liveTracking', '')}
//             />
//           </label>
//         </div>
//         <hr />
//         <div className="filter_div">
//           <p>DEPARTURE TIME</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('departureTime', 'before6am')}
//             />
//             Before 6 am (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('departureTime', 'morning')}
//             />
//             6 am to 12 pm (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('departureTime', 'evening')}
//             />
//             12 pm to 6 pm (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('departureTime', 'after6pm')}
//             />
//             After 6 pm (0)
//           </label>
//         </div>
//         <div className="filter_div">
//           <p>BUS TYPES</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('busTypes', 'seater')}
//             />
//             SEATER (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('busTypes', 'sleeper')}
//             />
//             SLEEPER (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('busTypes', 'ac')}
//             />
//             AC (23)
//           </label>
//         </div>
//         <div className="filter_div">
//           <p>SEAT AVAILABILITY</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('seatAvailability', '')}
//             />
//             Single Seats (9)
//           </label>
//         </div>
//         <div className="filter_div">
//           <p>ARRIVAL TIME</p>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('arrivalTime', 'before6am')}
//             />
//             Before 6 am (5)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('arrivalTime', 'morning')}
//             />
//             6 am to 12 pm (18)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('arrivalTime', 'evening')}
//             />
//             12 pm to 6 pm (0)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               onChange={() => handleFilterChange('arrivalTime', 'after6pm')}
//             />
//             After 6 pm (0)
//           </label>
//         </div>
//         <div className="points_div">
//           <p>BOARDING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="BOARDING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p>DROPPING POINT</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="DROPPING POINT" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p>OPERATOR</p>
//           <label>
//             <i className="fa-solid fa-magnifying-glass"></i>
//             <input type="text" placeholder="OPERATOR" />
//           </label>
//         </div>
//         <div className="points_div">
//           <p>AMENITIES</p>
//           <ul className="amenities">
//             <li>WIFI (23)</li>
//             <li>Water Bottle (23)</li>
//             <li>Blankets (4)</li>
//             <li>Charging Point (4)</li>
//             <li>Movie (0)</li>
//             <li>Track My Bus (4)</li>
//             <li>Emergency Contact Nu... (1)</li>
//             <li>Toilet (1)</li>
//           </ul>
//         </div>
//       </div>

//       {/* Right Section with Bus Tickets */}
//       <div className="container-xxl">
//         <div id="details_sorting_heading">
//           <p id="p-span">
//             <span id="no_of_buses" className="bold">{filteredBuses.length}</span> Buses <span className="bold">found</span>
//           </p>
//           <div className="sorting">
//             <p className="bold">SORT BY:</p>
//             <p id="departure" className="p">Departure <span id="order_departure_icon" className="p"></span></p>
//             <p id="duration" className="p">Duration</p>
//             <p id="arrival" className="p">Arrival</p>
//             <p id="rating" className="p">Ratings</p>
//             <p id="price" className="p">Fare</p>
//             <p id="seat" className="p">Seats Available</p>
//           </div>
//           <hr />
//         </div>
//         <div id="bus_details_section">
//           {filteredBuses.map((bus) => (
//             <div key={bus.id} className="bus_details_box">
//               <div className="bus_info">
//                 <p className="bus_name">{bus.bus_name}</p>
//                 <p className="bus_company">{bus.company}</p>
//                 <p className="bus_time">
//                   <span>In: {bus.time_in}</span> - <span>Out: {bus.time_out}</span>
//                 </p>
//                 <p className="bus_rating">Rating: {bus.rating}</p>
//                 <p className="bus_price">Price: {bus.price}</p>
//               </div>
//               <button className="book_now_btn" onClick={() => handleBookNow(bus)}>
//                 Book Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ShowSeatsModal modal */}
//       {selectedBus && (
//         <ShowSeatsModal isOpen={showModal} onClose={closeModal} busDetails={selectedBus} />
//       )}
//     </div>
//   );
// };

// export default BusList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowSeatsModal from './showseat'; // Adjust path as needed
import './buslist.css'; // Ensure this file exists and is correctly imported

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [filters, setFilters] = useState({
    liveTracking: false,
    departureTime: {
      before6am: false,
      morning: false,
      evening: false,
      after6pm: false,
    },
    busTypes: {
      seater: false,
      sleeper: false,
      ac: false,
    },
    seatAvailability: false,
    arrivalTime: {
      before6am: false,
      morning: false,
      evening: false,
      after6pm: false,
    },
  });
  const [selectedBus, setSelectedBus] = useState(null); // State to store the selected bus
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const res = await axios.get('https://json-server-02.onrender.com/redbus');
        setBuses(res.data);
      } catch (err) {
        console.error('Error fetching bus details:', err);
      }
    };

    fetchBuses();
  }, []);

  const handleFilterChange = (category, key) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [key]: !prevFilters[category][key],
      },
    }));
  };

  const handleBookNow = (bus) => {
    setSelectedBus(bus); // Set the selected bus when "Book Now" is clicked
    setShowModal(true); // Open the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  const filteredBuses = buses.filter(bus => {
    // Add filter logic here if needed
    return true; // For simplicity, returning all buses
  });

  return (
    <div className="buslist-container">
      {/* Left Sidebar with Filters */}
      <div className="left_section">
        <h6>FILTER</h6>
        <hr />
        <div className="filter_div">
          <p>Live Tracking (15)</p>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('liveTracking', '')}
            />
          </label>
        </div>
        <hr />
        <div className="filter_div">
          <p>DEPARTURE TIME</p>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('departureTime', 'before6am')}
            />
            Before 6 am (0)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('departureTime', 'morning')}
            />
            6 am to 12 pm (0)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('departureTime', 'evening')}
            />
            12 pm to 6 pm (0)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('departureTime', 'after6pm')}
            />
            After 6 pm (0)
          </label>
        </div>
        <div className="filter_div">
          <p>BUS TYPES</p>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('busTypes', 'seater')}
            />
            SEATER (0)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('busTypes', 'sleeper')}
            />
            SLEEPER (0)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('busTypes', 'ac')}
            />
            AC (23)
          </label>
        </div>
        <div className="filter_div">
          <p>SEAT AVAILABILITY</p>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('seatAvailability', '')}
            />
            Single Seats (9)
          </label>
        </div>
        <div className="filter_div">
          <p>ARRIVAL TIME</p>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('arrivalTime', 'before6am')}
            />
            Before 6 am (5)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('arrivalTime', 'morning')}
            />
            6 am to 12 pm (18)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('arrivalTime', 'evening')}
            />
            12 pm to 6 pm (0)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange('arrivalTime', 'after6pm')}
            />
            After 6 pm (0)
          </label>
        </div>
        <div className="points_div">
          <p>BOARDING POINT</p>
          <label>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="BOARDING POINT" />
          </label>
        </div>
        <div className="points_div">
          <p>DROPPING POINT</p>
          <label>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="DROPPING POINT" />
          </label>
        </div>
        <div className="points_div">
          <p>OPERATOR</p>
          <label>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="OPERATOR" />
          </label>
        </div>
        <div className="points_div">
          <p>AMENITIES</p>
          <ul className="amenities">
            <li>WIFI (23)</li>
            <li>Water Bottle (23)</li>
            <li>Blankets (4)</li>
            <li>Charging Point (4)</li>
            <li>Movie (0)</li>
            <li>Track My Bus (4)</li>
            <li>Emergency Contact Nu... (1)</li>
            <li>Toilet (1)</li>
          </ul>
        </div>
      </div>

      {/* Right Section with Bus Tickets */}
      <div className="right_section">
        <div id="details_sorting_heading">
          <p id="p-span">
            <span id="no_of_buses" className="bold">{filteredBuses.length}</span> Buses <span className="bold">found</span>
          </p>
          {/* <div className="flex items-center mb-4">
            <p className="bold">SORT BY:</p>
            <p id="departure" className="p">Departure <span id="order_departure_icon" className="p"></span></p>
            <p id="duration" className="p">Duration</p>
            <p id="arrival" className="p">Arrival</p>
            <p id="rating" className="p">Ratings</p>
            <p id="price" className="p">Fare</p>
            <p id="seat" className="p">Seats Available</p>
          </div> */}
          <div class="sort-container">
  <p class="sort-label">SORT BY:</p>
  <div class="sort-options">
    <div class="sort-option">
      <p id="departure">Departure <span id="order_departure_icon"></span></p>
    </div>
    <div class="sort-option">
      <p id="duration">Duration</p>
    </div>
    <div class="sort-option">
      <p id="arrival">Arrival</p>
    </div>
    <div class="sort-option">
      <p id="rating">Ratings</p>
    </div>
    <div class="sort-option">
      <p id="price">Fare</p>
    </div>
    <div class="sort-option">
      <p id="seat">Seats Available</p>
    </div>
  </div>
</div>

          <hr />
        </div>
        <div id="bus_details_section">
          {filteredBuses.map((bus) => (
            <div key={bus.id} className="bus_details_box">
              <div className="bus_info">
                <p className="bus_name">{bus.bus_name}</p>
                <p className="bus_company">{bus.company}</p>
                <p className="bus_location">
            Boarding: {bus.boardingcity} - Destination: {bus.destination}
          </p>
                <p className="bus_time">
                  <span>In: {bus.time_in}</span> - <span>Out: {bus.time_out}</span>
                </p>
                <p className="bus_rating">Rating: {bus.rating}</p>
                <p className="bus_price">Price: {bus.price}</p>
              </div>
              <button className="book_now_btn" onClick={() => handleBookNow(bus)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ShowSeatsModal modal */}
      {selectedBus && (
        <ShowSeatsModal isOpen={showModal} onClose={closeModal} busDetails={selectedBus} />
      )}
    </div>
  );
};

export default BusList;
