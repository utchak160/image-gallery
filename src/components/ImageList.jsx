import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => (
    <div className="grid grid-cols-3 gap-4">
        {images.map((image) => <ImageCard key={image.id} image={image} />)}
    </div>
)

export default ImageList;
