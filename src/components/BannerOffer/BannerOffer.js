import React from "react";

const BannerOffer = ({ banner, title }) => {
  return (
    <div className="banner-offer container" role="banner">
      <h2>{title}</h2>
      <a role="link" href="/p/6">
        <img role="img" src={banner.src} alt={banner.alt} />
      </a>
    </div>
  );
};

export default BannerOffer;
