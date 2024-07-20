import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BusDetailsComponent = () => {
  const [busDetails, setBusDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const response = await axios.get('https://json-server-02.onrender.com/redbus');
        setBusDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBusDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!busDetails) return <p>No bus details available.</p>;

  return (
    <div>
      <h2>Bus Details</h2>
      <ul>
        {busDetails.map(bus => (
          <li key={bus.id}>
            <h3>{bus.bus_name}</h3>
            <p>Company: {bus.company}</p>
            <p>Time In: {bus.time_in}</p>
            <p>Time Out: {bus.time_out}</p>
            <p>Rating: {bus.rating}</p>
            <p>Price: ${bus.price}</p>
            <p>Seats Available: {bus.seat_available}</p>
            <p>Booked Seats: {bus.booked_seats.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusDetailsComponent;
