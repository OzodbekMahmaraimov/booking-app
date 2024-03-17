import React, { useState } from "react";

const ItemListNew = ({ closeModal, addItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    quantity: "",
    price: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevItem => ({ ...prevItem, [name]: value }));
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append(newItem.name);
    formData.append(newItem.quantity);
    formData.append(newItem.price);
    formData.append(newItem.description);
    formData.append(newItem.category);
    // Agar rasm yuklash kerak bo'lsa:
    if (newItem.image) {
      formData.append('image', newItem.image);
    }
  
    addItem(formData); // Endi addItem funksiyasi FormData obyektini qabul qiladi.
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-2/6 shadow-lg rounded-md bg-white">
        <div className="mt-8">
          <input type="text" name="name" placeholder="Item Name" value={newItem.name} onChange={handleChange} className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
          <input type="text" name="quantity" placeholder="Item Quantity" value={newItem.quantity} onChange={handleChange} className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
          <input type="text" name="price" placeholder="Item Price" value={newItem.price} onChange={handleChange} className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
          <textarea name="description" placeholder="Item Description" value={newItem.description} onChange={handleChange} rows="4" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"></textarea>
          <select name="category" value={newItem.category} onChange={handleChange} className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none">
            <option value="">Select Category</option>
            {/* Kategoriyalar ro'yxati. Misol uchun: */}
            <option value="books">Coffee</option>
            <option value="electronics">Tea</option>
          </select>
          <button onClick={handleSave} className="px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-orange-600 focus:outline-none">
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
