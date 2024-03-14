// style
import { styles } from '../../../util/style'
// rectangles
import Rectangle from '../rectangle/Rectangle';
// images and logos
import smoke from '../../../assets/images/smoking-area-svgrepo-com.svg';
import meeting from '../../../assets/images/651818.svg';
import { IoFastFoodSharp, IoWifi } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

const Service = () => {

  return (
    <section className={`${styles.container} mt-28`}>
      <h1 className='text-[2rem] px-2 md:px-0 font-semibold'>Services we offer</h1>
      <hr className='border-t-2 border-[#000000] w-full mx-auto my-4' />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mt-20'>
        <Rectangle logo={<IoFastFoodSharp className='my-1' color='#F46A06' fontSize={60} />} text="Out side catering" />
        <Rectangle logo={<FaBirthdayCake className='my-1' color='#F46A06' fontSize={60} />} text="birthdays ceremonies" />
        <Rectangle image={smoke} text="Out side catering" />
        <Rectangle logo={<IoWifi className='my-1' color='#F46A06' fontSize={60} />} text="Free wifi" />
        <Rectangle image={meeting} text="Meetings" />
        <Rectangle logo={<MdEventAvailable className='my-1' color='#F46A06' fontSize={60} />} text="Meetings" />
      </div>

    </section>
  )
}

export default Service