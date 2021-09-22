import React from "react";

const BannerOffer = ({ banner, title }) => {
  return (
    <div className="banner-offer container">
      <h2>{title}</h2>
      <a href="/p/6">
        <img src={banner.src} alt={banner.alt} />
      </a>
    </div>
  );
};

export default BannerOffer;
