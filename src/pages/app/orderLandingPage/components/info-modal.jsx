const InfoModal = ({ modalImage, setModalImage }) => {

    return (
        <>
            {modalImage ? (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <p onClick={() => setModalImage(false)}>close</p>
                </div>
            ) : null}
        </>
    )
}

export default InfoModal