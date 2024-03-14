import React, { useState } from 'react';

const RoomBookingModal = ({ isOpen, isclose }) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);

    const openModal = () => setModalOpen(!isModalOpen);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-5 rounded-lg shadow-xl m-4 max-w-md w-full">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Room booked info</h2>
                    <div className="space-y-3">
                        <InfoRow label="Room no" value="P001" />
                        <InfoRow label="Room type" value="Premium room" />
                        <InfoRow label="Room price" value="175000 Rwf" />
                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Customer information</h2>
                        <InfoRow label="Customer name" value="Byiringiro Moise" />
                        <InfoRow label="Customer email" value="mbyiringiro18@gmail.com" />
                        <InfoRow label="Customer phone number" value="+250781850774" />
                        <InfoRow label="Customer address" value="Kicukiro" />
                        <InfoRow label="Booked days" value="3" />
                        <InfoRow label="Money paid" value="175000 RWF" />
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
