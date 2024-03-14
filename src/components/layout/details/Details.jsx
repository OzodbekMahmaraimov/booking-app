//main component
import { Link } from "react-router-dom"
import {
    detailsBg,
    cofeDetails,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5
} from "../../../assets/landing-img"
// import DetailsInfo from "./components/details/details-info"
// import Services from "./components/details/services";
// import './styles.css';
import DetailsFilterMenu from "../detailsFiltermenu/detailsFilterMenu";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import DetailsBtn from "./DetailsBtn";
// import Gallery from "./components/details/gallery";

const data = [
    { id: 1, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
    { id: 2, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
    { id: 3, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
    { id: 4, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
    { id: 5, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
    { id: 6, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
]

const Details = () => {
    const [items, setItems] = useState(data)
    const [itemsCount, setItemsCount] = useState(0)
    const goBack = () => window.history.back();

    useEffect(() => {
        setItemsCount(items && items.map(c => c.shoppingCount).reduce((a, b) => a + b))
    }, [items])

    return (
        <div className="details-main-font">
            <div className="flex justify-center w-full mt-10">
                <button
                    className="bg-[#F46A06] py-4 px-10 rounded-md text-white font-bold shadow-md 
                shadow-[#f469067c] hover:bg-[#f38d44] duration-300"
                >
                    Explore our menu
                </button>
            </div>
            <div className="max-w-[1100px] mx-auto mt-16">
                <DetailsFilterMenu itemsCount={itemsCount} />
            </div>
            <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
                {items.map(item => (
                    <div className="p-7 w-1/3">
                        <Cards
                            key={item.id}
                            item={item}
                            setItems={setItems}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Details;
