import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

const Product = ({ pricePerItem, itemName, itemImage, quantity, setQuantity, deleteProduct }) => {
    const subtotal = quantity * pricePerItem;

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 border border-gray-200 rounded">
            <div className="flex items-center mb-4 md:mb-0">
                <img
                    src={itemImage}
                    alt={itemName}
                    className="h-16 w-16 object-cover mr-4"
                />
                <div className="flex flex-col md:flex-row items-center gap-3 font-lexend">
                    <button
                        onClick={deleteProduct}
                        className='rounded-full p-1 text-center shadow-lg'
                    >
                        <IoCloseOutline fontSize={30} color='#F46A06' />
                    </button>
                    <span className="text-xl">{itemName}</span>
                </div>
            </div>
            <div className="flex justify-between items-center gap-0 md:gap-12 lg:gap-20 w-full md:w-auto mb-4 md:mb-0">
                <span className="text-gray-900 text-lg md:text-xl">{`${pricePerItem.toLocaleString()} RWF`}</span>
                <div className="flex items-center ml-4">
                    <button
                        onClick={decrementQuantity}
                        className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-l"
                    >
                        -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                        onClick={incrementQuantity}
                        className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-r"
                    >
                        +
                    </button>
                </div>
                <span className="text-gray-900 text-lg md:text-xl ml-4">{`${subtotal.toLocaleString()} RWF`}</span>
            </div>
        </div>
    );
};

export default Product;
