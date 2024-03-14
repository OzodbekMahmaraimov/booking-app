const HeadingTitle = ({ name }) => {
    return <h1 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        className='text-2xl font-bold tracking-wider text-black opacity-90 pb-5
        border-b-2 border-black ps-5'>
        {name}
    </h1>
}

export default HeadingTitle