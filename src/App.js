import React, { useState, useEffect } from 'react';
import ImageList from './components/ImageList';
import axios from 'axios';
import ImageSearch from './components/ImageSearch';

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(true);

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`)
            .then((res) => {
                setImages(res.data?.hits);
                setIsLoading(false);
            });
    }, [searchTerm]);
    return (
        <div className='mx-auto'>
            <ImageSearch searchImage={(text) => setSearchTerm(text)}/>
            {
                !isLoading && images.length === 0 ? <h1 className='text-center text-4xl font-semibold mt-32'>No Images Found!</h1>
                    : !!isLoading
                    ? <h1 className='text-center text-4xl font-bold mt-32'>Loading...</h1>
                    : <ImageList images={images}/>
            }
        </div>
    );
}

export default App;
