import React, { useState } from 'react';
import { Drawer } from 'antd';
const InfoModal = ({ modalImage, setModalImage, detailsOfficanvas }) => {
    const [placement, setPlacement] = useState('right');
    return (
        <>{modalImage && (
            <Drawer
                title="Drawer with extra actions"
                placement={placement}
                width={600}
                onClose={() => setModalImage(false)}
                open={modalImage}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        )}</>
    );
};
export default InfoModal;