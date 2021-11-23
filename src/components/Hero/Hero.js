import React from 'react';
import Slider from 'infinite-react-carousel';

const Hero = ({banners}) => {
    return(
        <div className="hero">
            <Slider dots>
                {banners.map((banner, index) =>
                <div key={index}>
                    <img role="img" src={banner.src} alt={banner.alt} />
                </div>
            )}
            </Slider>
        </div>
    );
};

export default Hero;

