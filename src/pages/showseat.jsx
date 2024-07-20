
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const ShowSeatsModal = ({ isOpen, onClose, busDetails }) => {
//   const [selectedSeat, setSelectedSeat] = useState(null);

//   // Generate seats where half are female and half are male
//   const generateSeats = (count, startId) => {
//     const seats = [];
//     let currentId = startId;
//     for (let i = 0; i < count; i++) {
//       seats.push({ id: currentId++, booked: false, gender: i < count / 2 ? 'female' : 'male' });
//     }
//     return seats;
//   };

//   // Example seats data (replace with actual logic)
//   const seats = {
//     upperDeck: generateSeats(48, 1),
//     lowerDeck: generateSeats(36, 49),
//   };

//   const handleSeatClick = (seat) => {
//     if (!seat.booked) {
//       setSelectedSeat(seat);
//     }
//   };

//   const closeModal = () => {
//     setSelectedSeat(null); // Clear selected seat when closing modal
//     onClose();
//   };

//   const handleConfirm = () => {
//     // Handle confirmation logic here, e.g., API call, updating state, etc.
//     console.log(`Confirmed seat ${selectedSeat.id}`);
//     closeModal(); // Close modal after confirmation
//   };

//   return (
//     <Modal isOpen={isOpen}>
//       <ModalContent>
//         <CloseButton onClick={closeModal}>&times;</CloseButton>
//         <ModalHeader>
//           <h2>Seats for {busDetails.bus_name}</h2>
//           <LocationInfo>
           
//             <div>
//               <h2>Boarding Time:</h2>
//               <p>{busDetails.destination}</p>
//               <h2>Destination Time:</h2>
//               <p>{busDetails.destination_time}</p>
//             </div>
//           </LocationInfo>
//         </ModalHeader>
//         <Decks>
//           <Deck>
//             <h3>Upper Deck</h3>
//             <SeatGrid>
//               {seats.upperDeck.map(seat => (
//                 <Seat
//                   key={seat.id}
//                   available={!seat.booked}
//                   selected={selectedSeat && selectedSeat.id === seat.id}
//                   onClick={() => handleSeatClick(seat)}
//                   gender={seat.gender}
//                 >
//                   {seat.id}
//                 </Seat>
//               ))}
//             </SeatGrid>
//           </Deck>
//           <Deck>
//             <h3>Lower Deck</h3>
//             <SeatGrid>
//               {seats.lowerDeck.map(seat => (
//                 <Seat
//                   key={seat.id}
//                   available={!seat.booked}
//                   selected={selectedSeat && selectedSeat.id === seat.id}
//                   onClick={() => handleSeatClick(seat)}
//                   gender={seat.gender}
//                 >
//                   {seat.id}
//                 </Seat>
//               ))}
//             </SeatGrid>
//           </Deck>
//         </Decks>
//         {selectedSeat && (
//           <SeatDetails>
//             <p>Seat Number: {selectedSeat.id}</p>
//             <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
//           </SeatDetails>
//         )}
//       </ModalContent>
//     </Modal>
//   );
// };

// const Modal = styled.div`
//   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
//   position: fixed;
//   z-index: 1;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0, 0, 0, 0.4);
// `;

// const ModalContent = styled.div`
//   background-color: #fefefe;
//   margin: 15% auto;
//   padding: 20px;
//   border: 1px solid #888;
//   width: 80%;
//   max-width: 600px;
// `;

// const ModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const CloseButton = styled.span`
//   color: #aaa;
//   float: right;
//   font-size: 28px;
//   font-weight: bold;
//   cursor: pointer;
// `;

// const LocationInfo = styled.div`
//   display: flex;
//   gap: 20px;

//   div {
//     flex: 1;
//   }
// `;

// const Decks = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const Deck = styled.div``;

// const SeatGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(10, 30px);
//   gap: 5px;
// `;

// const Seat = styled.div`
//   width: 30px;
//   height: 30px;
//   border: 1px solid ${({ gender }) => (gender === 'female' ? 'red' : 'black')};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: ${({ available }) => (available ? 'pointer' : 'not-allowed')};
//   background-color: ${({ selected }) => (selected ? 'blue' : 'transparent')};
// `;

// const SeatDetails = styled.div`
//   margin-top: 20px;
// `;

// const ConfirmButton = styled.button`
//   padding: 10px 20px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   cursor: pointer;
//   margin-top: 10px;
//   &:hover {
//     background-color: #45a049;
//   }
// `;

// export default ShowSeatsModal;
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const ShowSeatsModal = ({ isOpen, onClose, busDetails }) => {
//   const [selectedSeat, setSelectedSeat] = useState(null);
//   const [isConfirmed, setIsConfirmed] = useState(false);
//   const [boardingTime, setBoardingTime] = useState('');
//   const [destinationTime, setDestinationTime] = useState('');
//   const [price, setPrice] = useState('');

//   // Generate seats where half are female and half are male
//   const generateSeats = (count, startId) => {
//     const seats = [];
//     let currentId = startId;
//     for (let i = 0; i < count; i++) {
//       seats.push({ id: currentId++, booked: false, gender: i < count / 2 ? 'female' : 'male' });
//     }
//     return seats;
//   };

//   // Example seats data (replace with actual logic)
//   const seats = {
//     upperDeck: generateSeats(48, 1),
//     lowerDeck: generateSeats(36, 49),
//   };

//   const handleSeatClick = (seat) => {
//     if (!seat.booked) {
//       setSelectedSeat(seat);
//     }
//   };

//   const closeModal = () => {
//     setSelectedSeat(null); // Clear selected seat when closing modal
//     onClose();
//   };

//   const handleConfirm = () => {
//     // Simulate confirmation with mock data
//     const mockData = {
//       boardingTime: '14:00',
//       destinationTime: '20:00',
//       price: 1000,
//     };

//     setBoardingTime(mockData.boardingTime);
//     setDestinationTime(mockData.destinationTime);
//     setPrice(mockData.price);

//     setIsConfirmed(true);
//   };

//   const handleProceed = () => {
//     console.log('Proceed clicked'); // Handle further navigation or actions here
//     setIsConfirmed(false); // Reset confirmation state if needed
//   };

//   return (
//     <>
//       <Modal isOpen={isOpen}>
//         <ModalContent>
//           <CloseButton onClick={closeModal}>&times;</CloseButton>
//           <ModalHeader>
//             <h2>Seats for {busDetails.bus_name}</h2>
//             <LocationInfo>
//               <div>
//                 <h3>Boarding Point:</h3>
//                 <p>{busDetails.boarding_point}</p>
//                 <h3>Boarding Time:</h3>
//                 <p>{busDetails.boarding_time}</p>
//               </div>
//               <div>
//                 <h3>Destination:</h3>
//                 <p>{busDetails.destination}</p>
//                 <h3>Destination Time:</h3>
//                 <p>{busDetails.destination_time}</p>
//               </div>
//             </LocationInfo>
//           </ModalHeader>
//           <Decks>
//             <Deck>
//               <h3>Upper Deck</h3>
//               <SeatGrid>
//                 {seats.upperDeck.map(seat => (
//                   <Seat
//                     key={seat.id}
//                     available={!seat.booked}
//                     selected={selectedSeat && selectedSeat.id === seat.id}
//                     onClick={() => handleSeatClick(seat)}
//                     gender={seat.gender}
//                   >
//                     {seat.id}
//                   </Seat>
//                 ))}
//               </SeatGrid>
//             </Deck>
//             <Deck>
//               <h3>Lower Deck</h3>
//               <SeatGrid>
//                 {seats.lowerDeck.map(seat => (
//                   <Seat
//                     key={seat.id}
//                     available={!seat.booked}
//                     selected={selectedSeat && selectedSeat.id === seat.id}
//                     onClick={() => handleSeatClick(seat)}
//                     gender={seat.gender}
//                   >
//                     {seat.id}
//                   </Seat>
//                 ))}
//               </SeatGrid>
//             </Deck>
//           </Decks>
//           {selectedSeat && (
//             <SeatDetails>
//               <p>Seat Number: {selectedSeat.id}</p>
//               <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
//             </SeatDetails>
//           )}
//         </ModalContent>
//       </Modal>

//       {/* Confirmation Modal */}
//       {isConfirmed && (
//         <ConfirmationModal isOpen={isConfirmed}>
//           <ModalContent>
//             <CloseButton onClick={() => setIsConfirmed(false)}>&times;</CloseButton>
//             <h2>Confirmation Details</h2>
//             <p><strong>Boarding Time:</strong> {boardingTime}</p>
//             <p><strong>Destination Time:</strong> {destinationTime}</p>
//             <p><strong>Price:</strong> ${price}</p>
//             <ProceedButton onClick={handleProceed}>Proceed</ProceedButton>
//           </ModalContent>
//         </ConfirmationModal>
//       )}
//     </>
//   );
// };

// const Modal = styled.div`
//   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
//   position: fixed;
//   z-index: 1;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0, 0, 0, 0.4);
// `;

// const ModalContent = styled.div`
//   background-color: #fefefe;
//   margin: 15% auto;
//   padding: 20px;
//   border: 1px solid #888;
//   width: 80%;
//   max-width: 600px;
// `;

// const ModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const CloseButton = styled.span`
//   color: #aaa;
//   float: right;
//   font-size: 28px;
//   font-weight: bold;
//   cursor: pointer;
// `;

// const LocationInfo = styled.div`
//   display: flex;
//   gap: 20px;

//   div {
//     flex: 1;
//   }
// `;

// const Decks = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const Deck = styled.div``;

// const SeatGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(10, 30px);
//   gap: 5px;
// `;

// const Seat = styled.div`
//   width: 30px;
//   height: 30px;
//   border: 1px solid ${({ gender }) => (gender === 'female' ? 'red' : 'black')};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: ${({ available }) => (available ? 'pointer' : 'not-allowed')};
//   background-color: ${({ selected }) => (selected ? 'blue' : 'transparent')};
// `;

// const SeatDetails = styled.div`
//   margin-top: 20px;
// `;

// const ConfirmButton = styled.button`
//   padding: 10px 20px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   cursor: pointer;
//   margin-top: 10px;
//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const ConfirmationModal = styled.div`
//   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
//   position: fixed;
//   z-index: 2;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0, 0, 0, 0.4);
// `;

// const ProceedButton = styled.button`
//   padding: 10px 20px;
//   background-color: #008CBA;
//   color: white;
//   border: none;
//   cursor: pointer;
//   margin-top: 10px;
//   &:hover {
//     background-color: #005f6b;
//   }
// `;

// export default ShowSeatsModal;
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const ShowSeatsModal = ({ isOpen, onClose, busDetails }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const[dest,setDest]=useState('');
  const[arrival,setArrival]=useState('');
  const [boardingTime, setBoardingTime] = useState('');
  const [destinationTime, setDestinationTime] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Generate seats where half are female and half are male
  const generateSeats = (count, startId) => {
    const seats = [];
    let currentId = startId;
    for (let i = 0; i < count; i++) {
      seats.push({ id: currentId++, booked: false, gender: i < count / 2 ? 'female' : 'male' });
    }
    return seats;
  };

  // Example seats data (replace with actual logic)
  const seats = {
    upperDeck: generateSeats(48, 1),
    lowerDeck: generateSeats(36, 49),
  };

  const handleSeatClick = (seat) => {
    if (!seat.booked) {
      setSelectedSeat(seat);
    }
  };

  const closeModal = () => {
    setSelectedSeat(null); // Clear selected seat when closing modal
    onClose();
  };

  const handleConfirm = () => {
    // Simulate confirmation with mock data
    const mockData = {
      dest:'vijayawada',
      arrival:'Hydearbad',
      boardingTime: '14:00',
      destinationTime: '20:00',
      price: 1000,

    };
    setDest(mockData.dest);
    setArrival(mockData.arrival);
    setBoardingTime(mockData.boardingTime);
    setDestinationTime(mockData.destinationTime);
    setPrice(mockData.price);

    setIsConfirmed(true);
  };

  const handleProceed = () => {
    console.log('Proceed clicked'); // Handle further navigation or actions here
    navigate('/passenger'); // Navigate to PassengerDetails component
    setIsConfirmed(false); // Reset confirmation state if needed
  };

  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <ModalHeader>
            <h2>Seats for {busDetails.bus_name}</h2>
            <LocationInfo>
              <div>
                <h3>Boarding:</h3>
                <p>{busDetails.boarding_point}</p>
                <h3>Arrival :</h3>
                <p>{busDetails.boarding_time}</p>
              </div>
              
                
            </LocationInfo>
          </ModalHeader>
          <Decks>
            <Deck>
              <h3>Upper Deck</h3>
              <SeatGrid>
                {seats.upperDeck.map(seat => (
                  <Seat
                    key={seat.id}
                    available={!seat.booked}
                    selected={selectedSeat && selectedSeat.id === seat.id}
                    onClick={() => handleSeatClick(seat)}
                    gender={seat.gender}
                  >
                    {seat.id}
                  </Seat>
                ))}
              </SeatGrid>
            </Deck>
            <Deck>
              <h3>Lower Deck</h3>
              <SeatGrid>
                {seats.lowerDeck.map(seat => (
                  <Seat
                    key={seat.id}
                    available={!seat.booked}
                    selected={selectedSeat && selectedSeat.id === seat.id}
                    onClick={() => handleSeatClick(seat)}
                    gender={seat.gender}
                  >
                    {seat.id}
                  </Seat>
                ))}
              </SeatGrid>
            </Deck>
          </Decks>
          {selectedSeat && (
            <SeatDetails>
              <p>Seat Number: {selectedSeat.id}</p>
              <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
            </SeatDetails>
          )}
        </ModalContent>
      </Modal>

      {/* Confirmation Modal */}
      {isConfirmed && (
        <ConfirmationModal isOpen={isConfirmed}>
          <ModalContent>
            <CloseButton onClick={() => setIsConfirmed(false)}>&times;</CloseButton>
            <h2>Confirmation Details</h2>
            <p><strong>Route:</strong>{dest}-{arrival}</p>
            <p><strong>In Time:</strong> {boardingTime}</p>
            <p><strong>Arrival Time:</strong> {destinationTime}</p>
            <p><strong>Price:</strong> ${price}</p>
            <ProceedButton onClick={handleProceed}>Proceed</ProceedButton>
          </ModalContent>
        </ConfirmationModal>
      )}
    </>
  );
};

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const LocationInfo = styled.div`
  display: flex;
  gap: 20px;

  div {
    flex: 1;
  }
`;

const Decks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Deck = styled.div``;

const SeatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 30px);
  gap: 5px;
`;

const Seat = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${({ gender }) => (gender === 'female' ? 'red' : 'black')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ available }) => (available ? 'pointer' : 'not-allowed')};
  background-color: ${({ selected }) => (selected ? 'blue' : 'transparent')};
`;

const SeatDetails = styled.div`
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #45a049;
  }
`;

const ConfirmationModal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ProceedButton = styled.button`
  padding: 10px 20px;
  background-color: #008CBA;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #005f6b;
  }
`;

export default ShowSeatsModal;

