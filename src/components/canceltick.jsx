import React, { useState } from 'react';

const CancelTicketComponent = () => {
    const [ticketNumber, setTicketNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Function to handle ticket cancellation
    const handleCancel = async () => {
        setLoading(true);
        try {
            // Replace with actual API call to cancel the ticket
            const response = await fetch(`https://api.example.com/tickets/cancel/${ticketNumber}`, {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Ticket cancellation failed');
            }
            setMessage('Ticket cancelled successfully');
        } catch (error) {
            console.error('Error cancelling ticket:', error);
            setMessage('Failed to cancel ticket');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6">
            <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-4">CANCEL TICKET</h1>
                <h3 className="text-lg mb-6">Enter your ticket number to cancel your ticket</h3>
                
                <div className="flex flex-col items-center mb-6">
                    <input
                        type="text"
                        value={ticketNumber}
                        onChange={(e) => setTicketNumber(e.target.value)}
                        placeholder="Enter your ticket number"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-xs focus:outline-none focus:ring focus:ring-indigo-400 mb-4 text-center"
                    />
                    <button
                        className={`bg-red-500 hover:bg-red-600 text-blue px-4 py-2 rounded-md w-full max-w-xs ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleCancel}
                        disabled={loading}
                    >
                        {loading ? 'Cancelling...' : 'Cancel Ticket'}
                    </button>
                </div>

                {message && (
                    <p className={`mt-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CancelTicketComponent;
