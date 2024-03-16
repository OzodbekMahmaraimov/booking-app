import React from "react"

// ModalComponent.jsx
const ItemListNew = ({ closeModal }) => {
 return (
   <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
     <div className="relative top-20 mx-auto p-5 border w-2/6 shadow-lg rounded-md bg-white">
       {/* Modal content goes here, form, inputs, etc */}
       <div className="mt-3">
         {/* Form fields */}
         <div className="mt-2 pt-5 bg-white ">
           <label htmlFor="name">
           <p className="font-bold">
             Item Name
           </p>
           </label>
           <input type="text" id="name" placeholder="Item Name" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
           {/* Other form inputs... */}
         </div>
         <div className="  bg-white ">
           <label htmlFor="quantity">
           <p className="font-bold">
             Item Quality
           </p>
           </label>
           <input type="number" id="quantity" placeholder="Item Quality" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
           {/* Other form inputs... */}
         </div>
         <div className="  bg-white ">
           <label htmlFor="price">
           <p className="font-bold">
             Item Price
           </p>
           </label>
           <input type="number" id="price" placeholder="Item Price" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
           {/* Other form inputs... */}
         </div>
         <div className="  bg-white ">
           <label htmlFor="des">
           <p className="font-bold">
             Item Description
           </p>
           </label>
           <textarea id="des" rows="5" cols="30" placeholder="Item Description" className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
           {/* Other form inputs... */}
         </div>
         <div className="items-center px-4 py-3">
           <button id="ok-btn" className="px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
             Save
           </button>
         </div>
       </div>
       {/* Close button */}
       <div className="absolute flex justify-between w-full top-0 right-0 cursor-pointer px-4 py-3" onClick={closeModal}>
         <h3 className="text-lg leading-6 font-medium text-gray-900">Add Item</h3>
         <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
           <path d="M16.2 1.8l-7.2 7.2 7.2 7.2-1.4 1.4-7.2-7.2-7.2 7.2-1.4-1.4 7.2-7.2-7.2-7.2 1.4-1.4 7.2 7.2 7.2-7.2 1.4 1.4z"/>
         </svg>
       </div>
     </div>
   </div>
 );
};

export default ItemListNew;
