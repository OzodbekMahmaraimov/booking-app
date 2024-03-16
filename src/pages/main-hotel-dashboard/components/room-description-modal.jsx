import axios from 'axios';
import React, { useEffect, useState } from 'react';


const RoomBookingModal = ({ isOpen, isclose, id }) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/hotel-manage').then(res => {
            const room = res.data['manage-hotels-dashboard-rooms'].find(room => room.id === id);
            setRooms(room)

        })
    }, [])

    const openModal = () => setModalOpen(!isModalOpen);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-5 rounded-lg shadow-xl m-4 max-w-md w-full">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Room booked info</h2>
                    <div className="space-y-3">
                        <InfoRow label="Room no" value={rooms["Room-no"]} />
                        <InfoRow label="Room type" value={rooms['Room-Type'] ? "premium" : "normal"} />
                        <InfoRow label="Room price" value={rooms['Total-payment']} />
                        <InfoRow label="Room description" value={rooms['Room-Description']} />
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={isclose}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoRow = ({ label, value }) => (
    <div className="flex justify-between">
        <span className="font-medium text-gray-800">{label}</span>
        <span className="text-gray-600">{value}</span>
    </div>
);

export default RoomBookingModal;
