import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import './SearchForm.css'; // Assuming you have a CSS file for styling

const SearchForm = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [buses, setBuses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('https://json-server-02.onrender.com/redbus');
      setBuses(res.data);
      const queryParams = {
        origin,
        destination,
        departureDate,
        returnDate,
      };

      const queryString = Object.keys(queryParams)
        .map((key) => key + '=' + encodeURIComponent(queryParams[key]))
        .join('&');

      navigate(`/buses?${queryString}`, { state: { buses: res.data } });
    } catch (err) {
      console.error('Error fetching bus details:', err);
    }
  };

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <BiSearch className="inputIcon" />
          <input
            type="text"
            className="inputForm"
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <BiSearch className="inputIcon" />
          <input
            type="text"
            className="inputForm"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="inputForm"
            placeholder="Departure Date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="inputForm"
            placeholder="Return Date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
