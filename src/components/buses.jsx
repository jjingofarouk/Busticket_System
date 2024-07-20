import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Buses() {
    const All_bus = [
        {
            "_id": "618b660ca17ac455f40e10ef",
            "bus_name": "Bharat Benz A/C Sleeper(2 + 1)",
            "pick_up_time": "2",
            "duration": "3.30",
            "drop_time": "5.30",
            "rating": 1,
            "price": 425,
            "seats_available": 34,
            "seat_type": "single",
            "pickup_address": "durgapur",
            "drop_address": "howrah",
            "passengers": [],
            "travel_name": "JGD Travels Pvt Ltd.",
            "__v": 0
        },
        // Add more bus objects as needed
    ];

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const from = query.get("from");
    const to = query.get("to");

    const [buses, setBuses] = useState([]);

    useEffect(() => {
        if (from && to) {
            const filteredBuses = All_bus.filter((bus) =>
                bus.pickup_address.toLowerCase() === from.toLowerCase() &&
                bus.drop_address.toLowerCase() === to.toLowerCase()
            );
            setBuses(filteredBuses);
        }
    }, [All_bus, from, to]);

    if (!from || !to) {
        return (
            <div>
                <h2>Please enter both From and To locations to search for buses.</h2>
            </div>
        );
    }

    return (
        <div>
            <h2>Showing buses from {from} to {to}</h2>
            <ul>
                {buses.map((bus) => (
                    <li key={bus._id}>
                        <div>{bus.bus_name}</div>
                        <div>{bus.pickup_address} - {bus.drop_address}</div>
                        <div>Departure Time: {bus.pick_up_time}</div>
                        <div>Drop Time: {bus.drop_time}</div>
                        <div>Price: {bus.price}</div>
                        <div>Seats Available: {bus.seats_available}</div>
                        {/* Add more details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Buses;
