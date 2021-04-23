import React, { useState } from 'react';

const ImageSearch = ({ searchImage }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchImage(text);
    };

    return (
        <div className='max-w-sm rounded overflow-hidden mx-auto my-12'>
            <form onSubmit={onSubmit} className='w-full max-w-sm'>
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2 px-auto">
                    <input type="text" value={text} onChange={event => setText(event.target.value)}
                           className='appearance-none border-none leading-tight text-gray-700 mr-3 py-1 bg-transparent focus:outline-none'/>
                    <button type='submit'
                            className='flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm text-white border-4 py-1 px-2 rounded'>Search</button>
                </div>
            </form>
        </div>
    );
};

export default ImageSearch;
