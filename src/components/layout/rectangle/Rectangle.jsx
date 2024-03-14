
const Rectangle = ({ image, text, logo }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center shadow-md py-3 border-[0.8rem] rounded-2xl border-[#F1E8D7]">
        {image ? <img src={image} alt="logoes" /> : logo}
        <h2 className="text-2xl font-semibold">{text}</h2>
      </div>
    </>
  )
}

export default Rectangle