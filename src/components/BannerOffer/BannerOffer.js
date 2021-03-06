import React from 'react';

const BannerOffer = ({banner, title}) => {
    return(
        <div className="banner-offer container">
            <h2>{title}</h2>
            <img src={banner.src} alt={banner.alt}/>
        </div>
    );
};

export default BannerOffer;