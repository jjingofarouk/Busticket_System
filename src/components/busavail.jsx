import React, { useState, useEffect } from 'react';

const BusAvailability = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await fetch('http://localhost:3001/buses');
        const data = await response.json();
        setBuses(data);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusData();
  }, []);

  return (
    <div id="bus_details_section">
      <div id="details_sorting_heading">
        <p id="p-span">
          <span id="no_of_buses" className="bold">{buses.length}</span> Buses <span id="span" className="bold">found</span>
        </p>
        <p className="bold">SORT BY:</p>
        <p id="departure" className="p">Departure <span id="order_departure_icon" className="p"></span></p>
        <p id="duration" className="p">Duration</p>
        <p id="arrival" className="p">Arrival</p>
        <p id="rating" className="p">Ratings</p>
        <p id="price" className="p">Fare</p>
        <p id="seat" className="p">Seats Available</p>
        <hr />
      </div>
      {buses.map((bus) => (
        <div key={bus.id} className="bus-item">
          <h2>{bus.bus_name}</h2>
          <p>Company: {bus.company}</p>
          <p>Time In: {bus.time_in}</p>
          <p>Time Out: {bus.time_out}</p>
          <p>Rating: {bus.rating}</p>
          <p>Price: ${bus.price}</p>
          <p>Seats Available: {bus.seat_available - bus.booked_seats.length}</p>
        </div>
      ))}
    </div>
  );
};

export default BusAvailability;
