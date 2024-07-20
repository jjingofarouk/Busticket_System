import React, { useState } from 'react';

const TicketForm = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [dateOfJourney, setDateOfJourney] = useState('');

    const handlePickupChange = (event) => {
        setPickup(event.target.value);
    };

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleDateChange = (event) => {
        setDateOfJourney(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div className="container d-flex justify-content-right">
            <div className="banner-wrapper">
                {/* <div className="banner-content">
                    <h1 className="title">Get Your Ticket Online, Easy and Safely</h1>
                    <a href="tickets" className="cmn--btn">Get ticket now</a>
                </div> */}
                <div className=" d-flex gap-1 ticket-form-wrapper justify-content-center">
                    {/* <div className="ticket-header nav-tabs nav border-0 justify-content-right "><br/> */}
                        {/* <h4 className="title">Choose Your Ticket</h4><br></br>
                     */}
                    <div className="tab-content txt-center">
                        <div className="tab-pane fade show active" id="one-way">
                            <form onSubmit={handleSubmit} className="ticket-form row g-3 justify-content-center m-0">
                                <div className="col-md-6">
                                    <div className="form--group">
                                        <i className="las la-location-arrow"></i>
                                        <select
                                            className="form--control select2 select2-hidden-accessible"
                                            name="pickup"
                                            value={pickup}
                                            onChange={handlePickupChange}
                                        >
                                            <option value="">Pickup Point</option>
                                            <option value="1">Kansas</option>
                                            <option value="2">Dallas</option>
                                            <option value="3">Wichita</option>
                                            <option value="4">Emi Davenport</option>
                                            <option value="5">Echo Bass</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form--group">
                                        <i className="las la-map-marker"></i>
                                        <select
                                            className="form--control select2 select2-hidden-accessible"
                                            name="destination"
                                            value={destination}
                                            onChange={handleDestinationChange}
                                        >
                                            <option value="">Dropping Point</option>
                                            <option value="1">Kansas</option>
                                            <option value="2">Dallas</option>
                                            <option value="3">Wichita</option>
                                            <option value="4">Emi Davenport</option>
                                            <option value="5">Echo Bass</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form--group">
                                        <i className="las la-calendar-check"></i>
                                        <input
                                            type="text"
                                            name="date_of_journey"
                                            value={dateOfJourney}
                                            onChange={handleDateChange}
                                            className="form--control datepicker"
                                            placeholder="Departure Date"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form--group">
                                        <button type="submit">Find Tickets</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketForm;
