import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PictureCarousel = ({ images }) => {
    return (
        <Carousel autoPlay infiniteLoop>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.url} alt={image.alt} />
                    <p className="legend">{image.caption}</p>
                </div>
            ))}
        </Carousel>
    );
};

export default PictureCarousel;
