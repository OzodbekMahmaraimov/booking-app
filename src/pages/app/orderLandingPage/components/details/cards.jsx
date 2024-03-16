import DetailsBtn from "./detailsBtn"

const Cards = ({ item, setItemsFilterData }) => {
    const incHandler = (id) => {
        setItemsFilterData(items => items.map(item => {
            if (item.id === id) {
                console.log(item.id);
                return { ...item, shoppingCount: item.shoppingCount + 1 }; // Increase the count
            }
            return item;
        }));
    }

    const decHandler = (id) => {
        setItemsFilterData(items => items.map(item => {
            if (item.id === id && item.shoppingCount > 0) {
                return { ...item, shoppingCount: item.shoppingCount - 1 }; // Decrease the count
            }
            return item;
        }));
    }
    return (
        <div
            key={item.id}
            className='bg-slate-50 overflow-hidden rounded-3xl shadow-md shadow-slate-400 
            hover:shadow-lg hover:shadow-gray-500 duration-200 w-full hover:-mt-2'>
            <div className='w-full h-80 p-3 overflow-hidden'>
                <img
                    className='w-full h-full object-cover rounded-md'
                    src={item.img}
                    alt="card img" />
            </div>
            <div className="flex justify-between items-center p-3 mt-2">
                <h3 className='font-bold tracking-wide text-[1.1rem]'>
                    {item.name}
                </h3>
                <h3 className='font-bold tracking-wide text-[1.1rem]'>
                    {item.countName}
                    <button
                        className={`${item.shoppingCount <= 0 ? 'opacity-40' : ''} mx-3 font-extrabold text-[1.5rem]`}
                        disabled={item.shoppingCount <= 0 ? true : false}
                        onClick={() => decHandler(item.id)}>-</button>
                    <span className="text-[1.7rem]">{item.shoppingCount}</span>
                    <button
                        className={`mx-3 font-extrabold text-[1.5rem]`}
                        onClick={() => incHandler(item.id)}>+</button>
                </h3>
            </div>
            <div className="flex justify-between items-start p-3 mt-2">
                <DetailsBtn name={item.btn1} />
                <DetailsBtn name='Add to order' />
            </div>
        </div>
    )
}

export default Cards
