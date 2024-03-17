import React from "react";

const ItemListNew = ({ closeModal, addItem }) => {
  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-2/6 shadow-lg rounded-md bg-white">
        <div className="mt-8">
          <input type="text" name="name" placeholder="Item Name" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
          <input type="number" name="quantity" placeholder="Item Quantity" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
          <input type="number" name="price" placeholder="Item Price" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
          {/* <textarea name="description" placeholder="Item Description" value={newItem.description} onChange={handleChange} rows="4" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"></textarea> */}
          <select name="category" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none">
            <option value="">Select Category</option>
            <option value="books">Coffee</option>
            <option value="electronics">Tea</option>
          </select> 
          <button className="px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-orange-600 focus:outline-none">
            Save
          </button>
        </div>
        <div className="absolute flex justify-between w-full top-0 right-0 px-4 py-3">
          Add new item
          <svg onClick={closeModal} className=" cursor-pointer fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M16.2 1.8l-7.2 7.2 7.2 7.2-1.4 1.4-7.2-7.2-7.2 7.2-1.4-1.4 7.2-7.2-7.2-7.2 1.4-1.4 7.2 7.2 7.2-7.2 1.4 1.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ItemListNew;
