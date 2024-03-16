import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';

const DeliveryTime = () => {

  dayjs.extend(customParseFormat);
  const time = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <div className="font-lexend flex flex-col lg:flex-row items-center gap-3 mt-10 lg:gap-10 md:mt-20">
      <p>Delivery time :</p>
      <TimePicker className='w-[12rem] lg:w-[15rem]' size='large' placeholder='-- -- --' onChange={time} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
    </div>
  )
}

export default DeliveryTime;