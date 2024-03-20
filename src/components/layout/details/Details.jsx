import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailsFilterMenu from "../detailsFiltermenu/detailsFilterMenu";
import Cards from "./Cards";
import { apiUrl } from '../../../Api';

const Details = ({ setModalImage, setCardId, setCount }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(apiUrl + "orderLandingPage");
                setItems(response.data.mainOrder || []);
            } catch (err) {
                console.error("Error fetching items:", err.message);
            }
        };
        fetchItems();
    }, []);

    const itemsCount = items.reduce((acc, item) => acc + (item.shoppingCount || 0), 0);

    return (
        <div className="details-main-font">
            <div className="flex justify-center w-full mt-10">
                <button className="bg-[#F46A06] py-4 px-10 rounded-md text-white font-bold shadow-md 
                shadow-[#f469067c] hover:bg-[#f38d44] duration-300">
                    Explore our menu
                </button>
            </div>
            <div className="max-w-[1100px] mx-auto mt-16">
                <DetailsFilterMenu itemsCount={itemsCount} />
            </div>
            <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
                {items.map((item) => (
                    <div key={item.id} className="p-7 w-full md:w-1/2 lg:w-1/3">
                        <Cards
                            setCount={setCount}
                            setCardId={setCardId}
                            buttonText={item}
                            setModalImage={setModalImage}
                            item={item}
                            setItems={setItems}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;
