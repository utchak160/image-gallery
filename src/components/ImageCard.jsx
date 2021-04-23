import React from 'react';

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');

    return (
        <div className='max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-8'>
            <img className='w-full' src={image.webformatURL} alt="random"/>
            <div className="px-6 py-4">
                <h2 className="text-purple-500 font-semibold text-xl mb-2">Photo By {image.user}</h2>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-2">
                {tags.map((tag, index) => (
                    <span key={index} className='inline-block rounded-full bg-gray-200 px-2 py-1 mr-3 mb-3'>#{tag}</span>
                ))}
            </div>
        </div>
    )
};

export default ImageCard;
