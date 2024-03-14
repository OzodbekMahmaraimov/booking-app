import { styles } from '../../../util/style';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import hotel1 from '../../../assets/images/160502155618-terranea-vista-pool.jpg';
import hotel2 from '../../../assets/images/hotel.jpg';
import restaurant from '../../../assets/images/restaurant.jpg';
import foods from '../../../assets/images/foods.jpg';
import beach from '../../../assets/images/beach.jpg';
import byTheSea from '../../../assets/images/by-the-sea-restaurant.jpg';

const Gallery = () => {
    return (
        <section className={`${styles.container} flex flex-col gap-10 mt-16`}>
            <h1 className='text-3xl font-semibold font-quicksand'>Our Gallery</h1>
            <hr className='border-[0.5px] mx-auto w-full' />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0'>
                <LazyLoadImage className='h-full border-[0.7rem] border-[#F1E8D7] rounded-md cursor-pointer object-cover' effect='blur' src={foods} alt='food image' />
                <LazyLoadImage className='h-full border-[0.7rem] border-[#F1E8D7] rounded-md cursor-pointer object-cover' effect='blur' src={restaurant} alt='restaurant image' />
                <LazyLoadImage className='h-full border-[0.7rem] border-[#F1E8D7] rounded-md cursor-pointer object-cover' effect='blur' src={hotel1} alt='hotel image' />
                <LazyLoadImage className='h-full border-[0.7rem] border-[#F1E8D7] rounded-md cursor-pointer object-cover' effect='blur' src={hotel2} alt='hotel image' />
                <LazyLoadImage className='h-full border-[0.7rem] border-[#F1E8D7] rounded-md cursor-pointer object-cover' effect='blur' src={beach} alt='beach image' />
                <LazyLoadImage className='h-full border-[0.7rem] border-[#F1E8D7] rounded-md cursor-pointer object-cover' effect='blur' src={byTheSea} alt='byTheSea image' />
            </div>
        </section>
    );
}

export default Gallery;
