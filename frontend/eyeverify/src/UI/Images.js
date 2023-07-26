import React, { useState, useEffect } from 'react';

const RandomImages = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const responses = await Promise.all([
                fetch('https://source.unsplash.com/random/600x600/?sig=1'),
                fetch('https://source.unsplash.com/random/600x600/?sig=2'),
                fetch('https://source.unsplash.com/random/600x600/?sig=3'),
            ]);
            const images = responses.map((response) => {
                const url = response.url;
                return { url };
            });
            setImages(images);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {images.map((image, index) => (
                <div key={index} style={{ margin: '20px' }}>
                    <img src={image.url} alt={`Image ${index + 1}`} style={{ width: '300px', height: '300px', borderRadius: '8px' }} />
                    <h3 style={{ textAlign: 'center' }}>{`Image ${index + 1}`}</h3>
                </div>
            ))}
        </div>
    );
};

export default RandomImages;