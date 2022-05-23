import React from 'react';

const Loading = () => {
    return (
        <div className='m-12 mx-auto h-full items-center justify-center text-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loading;