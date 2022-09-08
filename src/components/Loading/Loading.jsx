import React from 'react';
import loadingGif from '../../images/Gif/loading.gif';

const Loading = () => {
    return (
        <div
            style={{ height: '60vh' }}
            className="container mx-auto flex justify-center items-center"
        >
            <img src={loadingGif} alt="" />
        </div>
    );
};

export default Loading;
