// import React, { useState } from 'react';

// const ShowTicketComponent = () => {
//   const [ticketNumber, setTicketNumber] = useState('');
//   const [ticket, setTicket] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Function to handle ticket search
//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       // Replace with actual API call to fetch ticket details
//       const response = await fetch(`https://api.example.com/tickets/${ticketNumber}`);
//       if (!response.ok) {
//         throw new Error('Ticket not found');
//       }
//       const data = await response.json();
//       setTicket(data);
//     } catch (error) {
//       console.error('Error fetching ticket:', error);
//       setTicket(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6">
//       <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md text-center">
//         <h1 className="text-3xl font-bold mb-4">PRINT TICKET</h1>
//         <h3 className="text-lg mb-6">Verify your details, and print your ticket</h3>
        
//         <div className="flex flex-col items-center mb-6">
//           <input
//             type="text"
//             value={ticketNumber}
//             onChange={(e) => setTicketNumber(e.target.value)}
//             placeholder="Enter your ticket number"
//             className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-xs focus:outline-none focus:ring focus:ring-indigo-400 mb-4 text-center"
//           />
//           <button
//             className={`bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded-md w-full max-w-xs mb-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//             onClick={handleSearch}
//             disabled={loading}
//           >
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </div>

//         {ticket && (
//           <div className="bg-gray-200 rounded-lg p-4 mt-6">
//             <h2 className="text-xl font-bold mb-2">Ticket Details</h2>
//             <p><span className="font-bold">Ticket Number:</span> {ticket.ticketNumber}</p>
//             <p><span className="font-bold">Passenger Name:</span> {ticket.passengerName}</p>
//             <p><span className="font-bold">Bus Name:</span> {ticket.busName}</p>
//             <p><span className="font-bold">Seat Number:</span> {ticket.seatNumber}</p>
//             <p><span className="font-bold">Departure Time:</span> {ticket.departureTime}</p>
//             <p><span className="font-bold">Arrival Time:</span> {ticket.arrivalTime}</p>
//             <p><span className="font-bold">Price:</span> {ticket.price}</p>
//           </div>
//         )}

//         {!ticket && ticketNumber !== '' && !loading && (
//           <p className="text-red-500 mt-4">Ticket not found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShowTicketComponent;
// import React, { useState } from 'react';

// const ShowTicketComponent = () => {
//   const [ticketNumber, setTicketNumber] = useState('');
//   const [ticket, setTicket] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Mock ticket data
//   const mockTicketData = [
//     {
//       ticketNumber: "12345",
//       passengerName: "Kumar",
//       busName: "Express Bus",
//       expiryTime: "00:30",
//       departureTime: "2024-07-17 10:00 AM",
//       price: "2500.00",
//       boardingCity: "Mumbai",
//       destinationCity: "Bengaluru"
//     },
//     {
//       ticketNumber: "67890",
//       passengerName: "Jane",
//       busName: "Luxury Coach",
//       expiryTime: "00:30",
//       departureTime: "2024-07-18 08:00 AM",
//       price: "1750.00",
//       boardingCity: "Vijayawada",
//       destinationCity: "Hyderabad"
//     }
//   ];

//   // Function to handle ticket search
//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       // Simulate network delay
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       const data = mockTicketData.find(ticket => ticket.ticketNumber === ticketNumber);
//       if (!data) {
//         throw new Error('Ticket not found');
//       }
//       setTicket(data);
//       setIsModalOpen(true);
//     } catch (error) {
//       console.error('Error fetching ticket:', error);
//       setTicket(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTicket(null); // Clear ticket data when closing modal
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6">
//       <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md text-center relative">
//         <h1 className="text-3xl font-bold mb-4">PRINT TICKET</h1>
//         <h3 className="text-lg mb-6">Verify your details, and print your ticket</h3>
        
//         <div className="flex flex-col items-center mb-6">
//           <input
//             type="text"
//             value={ticketNumber}
//             onChange={(e) => setTicketNumber(e.target.value)}
//             placeholder="Enter your ticket number"
//             className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-xs focus:outline-none focus:ring focus:ring-indigo-400 mb-4 text-center"
//           />
//           <button
//             className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full max-w-xs mb-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//             onClick={handleSearch}
//             disabled={loading}
//           >
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </div>

//         {isModalOpen && ticket && (
//           <>
//             <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeModal}></div>
//             <div className="fixed inset-0 flex items-center justify-center z-50">
//               <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-md">
//                 <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>&times;</button>
//                 <h2 className="text-lg font-bold mb-4">Ticket Details</h2>
//                 <p><span className="font-bold">Ticket Number:</span> {ticket.ticketNumber}</p>
//                 <p><span className="font-bold">Passenger Name:</span> {ticket.passengerName}</p>
//                 <p><span className="font-bold">Bus Name:</span> {ticket.busName}</p>
//                 <p><span className="font-bold">Expiry Time:</span> {ticket.expiryTime}</p>
//                 <p><span className="font-bold">Departure Time:</span> {ticket.departureTime}</p>
//                 <p><span className="font-bold">Price:</span> ${ticket.price}</p>
//                 <p><span className="font-bold">Route:</span> {ticket.boardingCity}-{ticket.destinationCity}</p>
//               </div>
//             </div>
//           </>
//         )}

//         {!ticket && ticketNumber !== '' && !loading && (
//           <p className="text-red-500 mt-4">Ticket not found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShowTicketComponent;
// import React, { useState } from 'react';

// const ShowTicketComponent = () => {
//   const [ticketNumber, setTicketNumber] = useState('');
//   const [ticket, setTicket] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Mock ticket data
//   const mockTicketData = [
//     {
//       ticketNumber: "12345",
//       passengerName: "Kumar",
//       busName: "Express Bus",
//       expiryTime: "00:30",
//       departureTime: "2024-07-17 10:00 AM",
//       price: "2500.00",
//       boardingCity: "Mumbai",
//       destinationCity: "Bengaluru"
//     },
//     {
//       ticketNumber: "67890",
//       passengerName: "Jane",
//       busName: "Luxury Coach",
//       expiryTime: "00:30",
//       departureTime: "2024-07-18 08:00 AM",
//       price: "1750.00",
//       boardingCity: "Vijayawada",
//       destinationCity: "Hyderabad"
//     }
//   ];

//   // Function to handle ticket search
//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       // Simulate network delay
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       const data = mockTicketData.find(ticket => ticket.ticketNumber === ticketNumber);
//       if (!data) {
//         throw new Error('Ticket not found');
//       }
//       setTicket(data);
//       setIsModalOpen(true);
//     } catch (error) {
//       console.error('Error fetching ticket:', error);
//       setTicket(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTicket(null); // Clear ticket data when closing modal
//   };

//   return (
//     <div style={{ background: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: isModalOpen ? 40 : -1, display: isModalOpen ? 'block' : 'none' }} onClick={closeModal}>
//       <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 50, display: isModalOpen ? 'block' : 'none' }}>
//         <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }} onClick={closeModal}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         {ticket && (
//           <>
//             <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Ticket Details</h2>
//             <p><span style={{ fontWeight: 'bold' }}>Ticket Number:</span> {ticket.ticketNumber}</p>
//             <p><span style={{ fontWeight: 'bold' }}>Passenger Name:</span> {ticket.passengerName}</p>
//             <p><span style={{ fontWeight: 'bold' }}>Bus Name:</span> {ticket.busName}</p>
//             <p><span style={{ fontWeight: 'bold' }}>Expiry Time:</span> {ticket.expiryTime}</p>
//             <p><span style={{ fontWeight: 'bold' }}>Departure Time:</span> {ticket.departureTime}</p>
//             <p><span style={{ fontWeight: 'bold' }}>Price:</span> ${ticket.price}</p>
//             <p><span style={{ fontWeight: 'bold' }}>Route:</span> {ticket.boardingCity}-{ticket.destinationCity}</p>
//           </>
//         )}
//         {!ticket && ticketNumber !== '' && !loading && (
//           <p style={{ color: 'red', marginTop: '10px' }}>Ticket not found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShowTicketComponent;
import React, { useState } from 'react';

const ShowTicketComponent = () => {
  const [ticketNumber, setTicketNumber] = useState('');
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock ticket data
  const mockTicketData = {
    "12345": {
      ticketNumber: "1234567890",
      passengerName: "Kousar",
      busName: "Express Bus",
      expiryTime: "00:30",
      departureTime: "2024-07-17 10:00 AM",
      price: "2500.00",
      boardingCity: "vijayawada",
      destinationCity: "Bengaluru"
    },
    "67890": {
      ticketNumber: "67890",
      passengerName: "kousar",
      busName: "Luxury Coach",
      expiryTime: "00:30",
      departureTime: "2024-07-18 08:00 AM",
      price: "1750.00",
      boardingCity: "Vijayawada",
      destinationCity: "Hyderabad"
    }
  };

  // Function to handle ticket search
  const handleSearch = async () => {
    setLoading(true);
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const data = mockTicketData[ticketNumber];
      if (!data) {
        throw new Error('Ticket not found');
      }
      setTicket(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching ticket:', error);
      setTicket(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md text-center relative">
        <h1 className="text-3xl font-bold mb-4">PRINT TICKET</h1>
        <h3 className="text-lg mb-6">Verify your details, and print your ticket</h3>
        
        <div className="flex flex-col items-center mb-6">
          <input
            type="text"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(e.target.value)}
            placeholder="Enter your ticket number"
            className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-xs focus:outline-none focus:ring focus:ring-indigo-400 mb-4 text-center"
          />
          <button
            style={{
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              width: '100%',
              maxWidth: '10rem',
              marginBottom: '1rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? '0.5' : '1'
            }}
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {isModalOpen && ticket && (
          <>
            {/* Background Overlay */}
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 40
            }} onClick={() => setIsModalOpen(false)}></div>

            {/* Modal */}
            <div style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '0.375rem',
              zIndex: 50,
              maxWidth: '20rem',
              width: '100%',
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
            }}>
              <button style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }} onClick={() => setIsModalOpen(false)}>&times;</button>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>Ticket Details</h2>
              <p><span style={{ fontWeight: '700' }}>Ticket Number:</span> {ticket.ticketNumber}</p>
              <p><span style={{ fontWeight: '700' }}>Passenger Name:</span> {ticket.passengerName}</p>
              <p><span style={{ fontWeight: '700' }}>Bus Name:</span> {ticket.busName}</p>
              <p><span style={{ fontWeight: '700' }}>Expiry Time:</span> {ticket.expiryTime}</p>
              <p><span style={{ fontWeight: '700' }}>In Time:</span> {ticket.departureTime}</p>
              <p><span style={{ fontWeight: '700' }}>Price:</span> ${ticket.price}</p>
              <p><span style={{ fontWeight: '700' }}>Route:</span> {ticket.boardingCity}-{ticket.destinationCity}</p>
            </div>
          </>
        )}

        {!ticket && ticketNumber !== '' && !loading && (
          <p style={{ color: '#ef4444', marginTop: '1rem' }}>Ticket not found</p>
        )}
      </div>
    </div>
  );
};

export default ShowTicketComponent;

