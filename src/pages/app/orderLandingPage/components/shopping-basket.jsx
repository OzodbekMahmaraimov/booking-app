import shopping from '../../../../assets/landing-img/shopping.png'
const ShoppingBasket = ({ count }) => {
    return (
        <div
            className='relative rounded-full bg-[#F1E8D7] border border-black shadow-md
            shadow-slate-800'>
            <span
                className='absolute -top-4 -right-2.5 flex justify-center items-center w-8 h-8 
                text-orange-500 rounded-full bg-white border border-black shadow-lg 
                shadow-[0px 4px 4px 0px #0000006b]'>{count}</span>
            <img className='w-14 h-14' src={shopping} alt="shopping img" />
        </div>
    )
}

export default ShoppingBasket