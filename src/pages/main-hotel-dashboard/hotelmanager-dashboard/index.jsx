import React, { useState } from 'react';
import { FaPlus, FaTrash, FaEllipsisV } from 'react-icons/fa';

const TableComponent = () => {
  // Jadval ma'lumotlari uchun o'zgartiruvchi
  const [items, setItems] = useState([
    { id: '#1', name: 'Cappuccino(iced)', category: 'Coffee', price: '2500.00 RWF', quantity: 10 },
    { id: '#2', name: 'Cappuccino(iced)', category: 'Coffee', price: '2500.00 RWF', quantity: 20 },
    { id: '#3', name: 'Cappuccino(iced)', category: 'Coffee', price: '2500.00 RWF', quantity: 30 },
    // ... Qolgan ma'lumotlar
  ]);

  // Tanlangan qatorlarni boshqarish uchun o'zgartiruvchi
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelection = new Set(prevSelectedItems);
      if (newSelection.has(itemId)) {
        newSelection.delete(itemId);
      } else {
        newSelection.add(itemId);
      }
      return newSelection;
    });
  };

  // Tanlangan elementlarni o'chirish uchun funksiya
  const handleDeleteSelectedItems = () => {
    setItems(items.filter((item) => !selectedItems.has(item.id)));
    setSelectedItems(new Set());
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md inline-flex items-center">
          <FaPlus className="mr-2" /> Add new item
        </button>
        <button onClick={handleDeleteSelectedItems} className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md inline-flex items-center">
          <FaTrash className="mr-2" /> Delete selected items
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-orange-200">
            <tr>
              <th className="px-6 py-3">Item ID</th>
              <th className="px-6 py-3">Item Name</th>
              <th className="px-6 py-3">Item Category</th>
              <th className="px-6 py-3">Item Price</th>
              <th className="px-6 py-3">Item Quantity</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className={selectedItems.has(item.id) ? 'bg-orange-100' : ''}>
                <td className="px-6 py-4">
                  <input type="checkbox" checked={selectedItems.has(item.id)} onChange={() => handleSelectItem(item.id)} />
                </td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">
                  <FaEllipsisV />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
