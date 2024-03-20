import { LazyLoadImage } from "react-lazy-load-image-component";
import DetailsBtn from "./DetailsBtn";
import { StrictMode } from "react";

const Cards = ({ item, setItems, setModalImage, setCardId, setCount }) => {
    const incHandler = (id) => {
        setItems(items => items.map(item => {
            if (item.id === id) {
                // Check if shoppingCount is a number; if not, start from 0
                const updatedCount = typeof item.shoppingCount === 'number' ? item.shoppingCount + 1 : 1;
                return { ...item, shoppingCount: updatedCount };
            }
            return item;
        }));
    };

    const decHandler = (id) => {
        setItems(items => items.map(item => {
            if (item.id === id) {
                // Check if shoppingCount is a number and greater than 0; if not, keep it at 0
                const updatedCount = typeof item.shoppingCount === 'number' && item.shoppingCount > 0 ? item.shoppingCount - 1 : 0;
                return { ...item, shoppingCount: updatedCount };
            }
            return item;
        }));
    };

    const handleButtonClick = (detailId) => {
        console.log("Button clicked on card with It:", item.id);
        setCardId(item.id);
        setCount(item.shoppingCount);
    };

    return (
        <div
            className='bg-slate-50 overflow-hidden rounded-3xl shadow-md shadow-slate-400 
            hover:shadow-lg hover:shadow-gray-500 duration-200 w-full hover:-mt-2'>
            <div className='w-full h-80 p-3 overflow-hidden'>
                <LazyLoadImage
                    effect="blur"
                    className='w-full h-full object-cover rounded-md'
                    src={item.img}
                    alt="card img" />
            </div>
            <div className="flex justify-between items-center p-3 mt-2">
                <h3 className='font-bold tracking-wide text-[1.1rem]'>
                    {item.name}
                </h3>
                <h3 className='font-bold tracking-wide text-[1.1rem]'>
                    <button
                        className={`${item.shoppingCount <= 0 ? 'opacity-40' : ''} mx-3 font-extrabold text-[1.5rem]`}
                        disabled={item.shoppingCount <= 0}
                        onClick={() => decHandler(item.id)}>-</button>
                    <span className="text-[1.7rem]">{item.shoppingCount ? item.shoppingCount : "0"}</span>
                    <button
                        className='mx-3 font-extrabold text-[1.5rem]'
                        onClick={() => incHandler(item.id)}>+</button>
                </h3>
            </div>
            <div className="flex justify-between items-start p-3 mt-2">
                {item.detailsInfo.map((detail, index) => (
                    <StrictMode key={index}>
                        <DetailsBtn name={detail.btn1 || "Default Button Text"} />
                        <DetailsBtn setModalImage={setModalImage} onClick={handleButtonClick} name={"Add Order"} />
                    </StrictMode>
                ))}

            </div>
        </div>
    );
};

export default Cards;
