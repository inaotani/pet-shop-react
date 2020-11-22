import React from 'react';
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import Hero from "../../components/Hero";
import banner1 from './../../assets/imgs/banner2.jpg';
import bannerOffer from './../../assets/imgs/banner3.jpg';
import BannerOffer from './../../components/BannerOffer';
import Search from './../../components/Search';
import './styles.css';

const Homepage = () => {
    return (
        <Layout>
            <Search />
            <Hero banners={[
            { src: banner1, alt: 'Banner de oferta 1' },
            { src: banner1, alt: 'Banner de oferta 2' },
            ]} />
            <BannerOffer banner={{src: bannerOffer, alt: 'Banner de oferta'}} title="Oferta da Semana" />
            <Grid title="Nossos Produtos" />
        </Layout>
    );
};

export default Homepage;