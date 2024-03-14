import { useState } from 'react';
import {
    Map,
    Placemark,
    YMaps,
    ZoomControl,
    RouteButton,
    SearchControl,
} from "react-yandex-maps";

const LocationMap = () => {
    const [locate, setLocate] = useState([38.841605, 65.789979]);
    const [zoom, setZoom] = useState(10);
    const [addressLoc, setAddressLoc] = useState();
    const [isHovered, setHovered] = useState(false);
    const apiKey = '28c3f859-1fa2-4b41-9df4-e371053dc79e';

    // zoom ni uzgartirish
    const handleZoomChange = (e) => setZoom(e.get('newZoom'))
    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    // turgan manzilni olish
    const getMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setLocate([latitude, longitude]);
                    setZoom(10);
                },
                (error) => {
                    console.error('Geolocation error:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    // click bulganda location olish
    const locationClick = (e) => {
        const coords = e.get('coords')
        setLocate(coords);
        const geoCodeUrl = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${apiKey}&geocode=${coords[1]},${coords[0]}`;

        fetch(geoCodeUrl)
            .then(response => response.json())
            .then(data => setAddressLoc(data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text))
            .catch(() => console.error('Xatolik yuz berdi!'));
    }

    function goBack() {
        window.history.back(); // Tarixdagi sahifaga qaytish
    }

    const placemarkOptions = { iconColor: isHovered ? 'red' : 'blue', preset: 'islands#circleDotIcon', };

    return (
        <div className="w-full min-h-screen relative overflow-hidden">
            <YMaps query={{ apikey: '28c3f859-1fa2-4b41-9df4-e371053dc79e' }}>
                <Map
                    defaultState={{ center: locate, zoom: zoom }}
                    width='100%'
                    height='100vh'
                    onBoundsChange={handleZoomChange}
                    onClick={locationClick}
                    modules={['control.ZoomControl', 'control.FullscreenControl']}
                >
                    <Placemark
                        geometry={locate}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        properties={{ balloonContent: addressLoc, }}
                        options={placemarkOptions}
                        modules={['geoObject.addon.balloon']}
                    />
                    <ZoomControl
                        options={{ position: { bottom: 40, right: 10, } }}
                    />
                    {/* <FullscreenControl
                        data={{ title: 'Full screen map' }}
                        options={{ position: { bottom: 260, right: 10, } }}
                    /> */}
                    <RouteButton
                        options={{
                            position: { top: 10, right: 10, },
                            selectOnClick: false,
                            types: {
                                auto: true, // Avtomobil yo'nalishi
                                masstransit: true, // Transport yo'nalishi
                                pedestrian: true, // Piyoda yo'nalishi
                                bicycle: true, // Velosiped yo'nalishi
                                taxi: true, // Taksi yo'nalishi
                                multiroute: true, // Ko'p yo'nalishli yo'nalish
                                masstransitSuburban: true, // Transport yo'nalishi (shahar tashqarisida)
                                masstransitCity: true, // Transport yo'nalishi (shahar ichida)
                            }
                        }}
                    />
                    <SearchControl
                        options={{ position: { top: 10, left: 10 } }}
                        state={{ expanded: true }}
                    />
                </Map>
            </YMaps>
            <button
                onClick={getMyLocation}
                className='absolute right-1 bottom-[16rem] text-green-400 border-2 shadow-lg active:bg-green-500 
                active:text-white hover:text-green-600 duration-200 bg-white rounded-full w-10 h-10 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M8 1.018V0H7v1.018a6.5 6.5 0 0 0-5.981 5.977H0v1h1.019A6.508 6.508 0 0 0 7 13.981V15h1v-1.019a6.508 6.508 0 0 0 5.981-5.986H15v-1h-1.019A6.5 6.5 0 0 0 8 1.018M8 3v3.995h4v1H8V12H7V7.995H3v-1h4V3z" clip-rule="evenodd" /></svg>
            </button>
            <button
                onClick={goBack}
                className='absolute right-[8.5rem] top-[.6rem] text-green-400 border-2 shadow-lg active:bg-green-500 
                active:text-white hover:text-green-600 duration-200 bg-white px-2 py-0.5 rounded-lg'>
                Back
            </button>
        </div>
    )
}

export default LocationMap;